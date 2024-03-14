import { useContext, createContext, useState } from "react";
import axios from "axios";

// create context and use it
const BooksContext = createContext();
export const useBooksContext = () => useContext(BooksContext);

// create Provider
export const BooksProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [selectedBooks, setSelectedBooks] = useState([]);

  const key = import.meta.env.VITE_API_KEY;

  const fetchBooks = async (searchTerm) => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=${key}`
      );
      setBooks(response.data.items);
    } catch (error) {
      console.error("Fehler bei fetching!!!", error);
    }
  };

  const addBookToRead = (book) => {
    setSelectedBooks([...selectedBooks, book]);
  };

  return (
    <BooksContext.Provider
      value={{ books, selectedBooks, addBookToRead, fetchBooks }}
    >
      {children}
    </BooksContext.Provider>
  );
};
