import React, { useContext, useState } from 'react';
import { InputGroup, Form, Button } from 'react-bootstrap';
import getBooks from '../api/requests';
import BookContext from '../context/books/BookContext';

function SearchBar() {
  const { setBooks } = useContext(BookContext);

  const [search, setSearch] = useState('');

  const searchBooks = async () => {
    const books = await getBooks(search);
    setBooks(books);
  };

  return (
    <InputGroup className="mb-3">
      <Form.Control onChange={({ target }) => setSearch(target.value)} />
      <Button
        variant="outline-success"
        onClick={searchBooks}
      >
        Buscar
      </Button>
    </InputGroup>
  );
}

export default SearchBar;
