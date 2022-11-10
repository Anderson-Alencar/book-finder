import React, { useState } from 'react';
import PropTypes from 'prop-types';
import BookContext from './BookContext';

function BookProvider({ children }) {
  const [books, setBooks] = useState([]);

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const contextValue = {
    books,
    setBooks,
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
