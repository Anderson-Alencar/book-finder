import React, { useContext, useState } from 'react';
import { InputGroup, Form, Button } from 'react-bootstrap';
import getBooks from '../api/requests';
import BookContext from '../context/books/BookContext';

function SearchBar() {
  const { setBooks } = useContext(BookContext);

  const [search, setSearch] = useState('');

  const searchBooks = async () => {
    const data = await getBooks(search);
    if (data.items) {
      const books = data.items.map((item) => item.volumeInfo);
      setBooks(books);
    } else {
      setBooks([]);
    }
  };

  return (
    <InputGroup className="mb-3 search-bar">
      <Form.Control onChange={({ target }) => setSearch(target.value)} />
      <Button
        variant="outline-success"
        disabled={(search.length < 2)}
        onClick={searchBooks}
      >
        Buscar
      </Button>
    </InputGroup>
  );
}

export default SearchBar;
