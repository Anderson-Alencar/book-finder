import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import PropTypes from 'prop-types';
import noImage from '../assets/images/no-image.png';

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
      <ListGroup>
        <ListGroup.Item>
          {
            book.averageRating ? `${book.averageRating} ⭐` : 'Sem avaliações'
          }
        </ListGroup.Item>
      </ListGroup>
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
