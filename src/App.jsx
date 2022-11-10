import React from 'react';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import BookProvider from './context/books/BookProvider';

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
