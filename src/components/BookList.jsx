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
      {books.length === 0 && <span>Sem resultados para essa busca</span>}
    </Row>
  );
}

export default BookList;
