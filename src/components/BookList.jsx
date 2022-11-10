import React, { useContext } from 'react';
import { Row } from 'react-bootstrap';
import BookContext from '../context/books/BookContext';
import BookCard from './BookCard';

function BookList() {
  const { books } = useContext(BookContext);

  return (
    <Row>
      {
        books.map((book) => (
          <BookCard
            key={book.infoLink}
            book={book}
          />
        ))
      }
    </Row>
  );
}

export default BookList;
