import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import BookProvider from './context/books/BookProvider';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/app.css';

function App() {
  return (
    <div className="container">
      <BookProvider>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BookProvider>
    </div>
  );
}

export default App;
