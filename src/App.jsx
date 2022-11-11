import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import BookProvider from './context/books/BookProvider';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/app.css';
import Favorites from './pages/Favorites';

function App() {
  return (
    <div className="container">
      <BookProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </BookProvider>
    </div>
  );
}

export default App;
