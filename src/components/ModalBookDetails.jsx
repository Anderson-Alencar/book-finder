import React, { useState } from 'react';
import { Button, Image, Modal } from 'react-bootstrap';
import PropTypes from 'prop-types';
import noImage from '../assets/images/no-image.png';

function ModalBookDetails({ book }) {
  const [show, setShow] = useState(false);

  return (
    <div>
      <Button onClick={() => setShow(true)}>
        Ver detalhes
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        size="lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>{ book.title }</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {
            book.imageLinks
              ? <Image className="image-modal" src={book.imageLinks.thumbnail} />
              : <Image className="image-modal" src={noImage} />
          }
          <p>{ book.description }</p>
          <hr />
          <h6>Autores</h6>
          <ul>
            { book.authors && book.authors.map((author) => (
              <li key={author}>{ author }</li>
            ))}
          </ul>
          <hr />
          <p>{ `${book.pageCount} páginas` }</p>
          <hr />
          <a href={book.infoLink}>Mais informações</a>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default ModalBookDetails;

ModalBookDetails.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    pageCount: PropTypes.number,
    infoLink: PropTypes.string,
    imageLinks: PropTypes.shape({
      thumbnail: PropTypes.string,
    }),
    authors: PropTypes.arrayOf(
      PropTypes.string,
    ),
  }).isRequired,
};
