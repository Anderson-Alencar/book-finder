import React, { useContext, useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from 'react-icons/md';
import noImage from '../assets/images/no-image.png';
import ModalBookDetails from './ModalBookDetails';
import BookContext from '../context/books/BookContext';

function BookCard({ book }) {
  const { favoriteBooks, setFavoriteBooks } = useContext(BookContext);
  const [isFavorite, setIsFavorite] = useState(false);

  const checkFavorites = () => favoriteBooks.find((item) => (
    item === book
  ));

  useEffect(() => {
    if (checkFavorites()) {
      setIsFavorite(true);
    }
  });

  const handleFavorite = () => {
    setIsFavorite(!isFavorite);

    if (favoriteBooks.length > 0) {
      const favAlReady = checkFavorites();

      if (favAlReady) {
        const newFavList = favoriteBooks.filter((item) => item !== book);
        localStorage.setItem('favorites', JSON.stringify(newFavList));
        setFavoriteBooks(newFavList);
      } else {
        const newFavList = [...favoriteBooks, book];
        localStorage.setItem('favorites', JSON.stringify(newFavList));
        setFavoriteBooks(newFavList);
      }
    } else {
      localStorage.setItem('favorites', JSON.stringify([book]));
      setFavoriteBooks([book]);
    }
  };

  return (
    <Card className="card">
      {
        book.imageLinks
          ? <Card.Img variant="top" className="card-image" src={book.imageLinks.thumbnail} />
          : <Card.Img variant="top" className="card-image" src={noImage} />
      }
      <Card.Body>
        <Card.Title>{ book.title }</Card.Title>
      </Card.Body>
      <ModalBookDetails book={book} />
      <hr />
      <div className="row-actions">
        <button
          type="button"
          className="fav-button"
          onClick={handleFavorite}
        >
          { isFavorite ? <MdOutlineFavorite /> : <MdOutlineFavoriteBorder /> }
        </button>
        <Card.Text>
          {
            book.averageRating ? `${book.averageRating} ⭐` : 'Sem avaliações'
          }
        </Card.Text>
      </div>
    </Card>
  );
}

export default BookCard;

BookCard.defaultProps = {
  book: {
    title: 'Sem título',
    imageLinks: '',
    averageRating: 'Sem avaliação',
  },
};

BookCard.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string,
    imageLinks: PropTypes.shape({
      thumbnail: PropTypes.string,
    }),
    averageRating: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
  }),
};
