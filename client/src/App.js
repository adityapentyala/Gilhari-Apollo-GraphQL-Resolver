import './App.css';
import { Routes, Route } from 'react-router-dom';
import { BooksPage } from './pages/BooksPage/BooksPage.js';
import { AuthorsPage } from './pages/AuthorsPage/AuthorsPage.js'


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<BooksPage />}></Route>
        <Route path='/books' element={<BooksPage />}></Route>
        <Route path='/authors' element={<AuthorsPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
