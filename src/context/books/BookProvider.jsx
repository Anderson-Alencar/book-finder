import React, { useState } from 'react';
import PropTypes from 'prop-types';
import BookContext from './BookContext';

function BookProvider({ children }) {
  const favoriteStart = JSON.parse(localStorage.getItem('favorites'));

  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [favoriteBooks, setFavoriteBooks] = useState(favoriteStart || []);

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const contextValue = {
    books,
    setBooks,
    loading,
    setLoading,
    currentPage,
    setCurrentPage,
    favoriteBooks,
    setFavoriteBooks,
  };

  return (
    <BookContext.Provider value={contextValue}>
      { children }
    </BookContext.Provider>
  );
}

export default BookProvider;

BookProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
