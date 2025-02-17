import './App.css';
import { Routes, Route } from 'react-router-dom';
import { BooksPage } from './pages/BooksPage/BooksPage.js';
import { AuthorsPage } from './pages/AuthorsPage/AuthorsPage.js'
import {NewAuthorPage} from './pages/NewAuthorPage/NewAuthorPage.js'
import { NewBookPage } from './pages/NewBookPage/NewBookPage.js'
import { AuthorPage } from './pages/AuthorPage/AuthorPage.js'
import { BookPage } from './pages/BookPage/BookPage.js'
import { Navbar } from './components/Navbar/Navbar.js';
import { HomePage } from './pages/HomePage/HomePage.js';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/books' element={<BooksPage />}></Route>
        <Route path='/authors' element={<AuthorsPage />}></Route>
        <Route path='/newAuthor' element={<NewAuthorPage />}></Route>
        <Route path='/newBook' element={<NewBookPage />}></Route>
        <Route path='/authors/:aID' element={<AuthorPage />}></Route>
        <Route path='/books/:bID' element={<BookPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
