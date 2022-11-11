import React from 'react';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import noImage from '../assets/images/no-image.png';
import ModalBookDetails from './ModalBookDetails';

function BookCard({ book }) {
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
      <Card.Text>
        {
          book.averageRating ? `${book.averageRating} ⭐` : 'Sem avaliações'
        }
      </Card.Text>
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
