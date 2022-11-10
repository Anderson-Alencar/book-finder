import React from 'react';
import Home from './pages/Home';
import BookProvider from './context/books/BookProvider';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/app.css';

function App() {
  return (
    <div className="container">
      <BookProvider>
        <Home />
      </BookProvider>
    </div>
  );
}

export default App;
