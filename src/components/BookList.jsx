import React, { useContext } from 'react';
import { Row } from 'react-bootstrap';
import BookContext from '../context/books/BookContext';
import BookCard from './BookCard';

function BookList() {
  const { books, loading, currentPage } = useContext(BookContext);

  const startIndex = (currentPage - 1) * 10;
  const endIndex = startIndex + 10;
  const page = books.slice(startIndex, endIndex);

  return (
    <Row>
      {loading && <span>Loading...</span>}
      {
        page.map((book) => (
          <BookCard
            key={book.infoLink}
            book={book}
          />
        ))
      }
      {books.length === 0 && !loading && <span>Sem resultados para essa busca</span>}
    </Row>
  );
}

export default BookList;
