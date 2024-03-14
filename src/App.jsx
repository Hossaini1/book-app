import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { BooksProvider } from "./BooksContex";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import BookToRead from "./pages/BookToRead";

function App() {
  return (
    <>
      <BrowserRouter>
        <BooksProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/toread" element={<BookToRead />} />
            <Route path="*" element={<Navigate to='/' />} />
            
          </Routes>
        </BooksProvider>
      </BrowserRouter>
    </>
  );
}
export default App;
