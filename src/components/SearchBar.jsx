import React, { useState } from 'react';
import { InputGroup, Form, Button } from 'react-bootstrap';

function SearchBar() {
  const [search, setSearch] = useState('');

  return (
    <InputGroup className="mb-3">
      <Form.Control onChange={({ target }) => setSearch(target.value)} />
      <Button variant="outline-success">Buscar</Button>
    </InputGroup>
  );
}

export default SearchBar;
