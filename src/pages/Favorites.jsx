import React, { useContext } from 'react';
import { Button, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import BookCard from '../components/BookCard';
import BookContext from '../context/books/BookContext';

function Favorites() {
  const { favoriteBooks, loading } = useContext(BookContext);

  return (
    <Row>
      <Link to="/">
        <Button>
          Pagina inicial
        </Button>
      </Link>
      {loading && <span>Loading...</span>}
      {
        favoriteBooks.map((book) => (
          <BookCard
            key={book.infoLink}
            book={book}
          />
        ))
      }
      {favoriteBooks.length === 0 && !loading && <span>Sem favoritos</span>}
    </Row>
  );
}

export default Favorites;
