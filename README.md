
# 📚 Book-App
Willkommen zur Book-App! Diese Anwendung bietet eine einfache Möglichkeit, Bücher zu durchsuchen, Details zu einzelnen Büchern anzuzeigen und sie zur Leseliste hinzuzufügen. Die Book-App ist mit modernen Web-Technologien entwickelt und bietet eine benutzerfreundliche Oberfläche für alle Bücherliebhaber.

[Visit the Book-App](https://book-app-vert.vercel.app/)

## Funktionen

- **Bücher durchsuchen**: Durchsuchen Sie eine Vielzahl von Büchern nach Titel, Autor oder Genre..
- **Leseliste**: Fügen Sie interessante Bücher Ihrer Leseliste hinzu und verwalten Sie sie.
- **Responsive Design**: Optimiert für alle Geräte, damit Sie unterwegs problemlos Bücher finden können..
- **Moderne Technologie**: Entwickelt mit React, Bootstrap und Vite für eine schnelle und effiziente Benutzererfahrung.
  ## Installation

1. Repository klonen:
    ```sh
    git@github.com:Hossaini1/book-app.git
    ```
2. In das Projektverzeichnis wechseln:
    ```sh
    cd book-app
    ```
3. Abhängigkeiten installieren:
    ```sh
    npm install
    ```
    4. .env Datei mit eigene KEY erstellen:
   - VITE_API_KEY=your_omdb_api_key
    
4. Entwicklungsserver starten:
    ```sh
    npm run dev
    ```

## Technologien

- **React**: Eine JavaScript-Bibliothek zur Entwicklung von Benutzeroberflächen.
- **React Bootstrap**: Eine Bibliothek mit React-Komponenten für das Bootstrap Framework.
- **Vite**: Ein schnelleres Frontend-Build-Tool im Vergleich zu traditionellen Bundlern.
- **Bootstrap**: Ein beliebtes CSS-Framework für das Design und Layout von Webseiten.
- **OMDb API**: Eine API zum Abrufen von Bücher, die für die Suche nach Bücher verwendet wird.
- **LocalStorage**: Zur Speicherung der Favoritenliste lokal im Browser.
  

## Projektstruktur

```plaintext
project-root/
│
├── public/
│   └── index.html
│
├── src/
│   ├── components/
│   │   ├── BookDetails.jsx
│   │   ├── BookSearch.jsx
│   │   └── Navbar.jsx
│   │
│   ├── pages/
│   │   ├── BookToRead.jsx
│   │   └── Home.jsx
│   │
│   ├── App.css
│   ├── App.jsx
│   ├── BooksContex.jsx
│   ├── index.css
│   └── main.jsx
│
├── .eslintrc.json
├── .gitignore
├── package.json
├── vite.config.js
└── README.md
