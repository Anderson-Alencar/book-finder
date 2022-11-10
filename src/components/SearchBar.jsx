import React from 'react';
import { InputGroup, Form } from 'react-bootstrap';

function SearchBar() {
  return (
    <InputGroup className="mb-3">
      <Form.Control />
      <InputGroup.Text>Buscar</InputGroup.Text>
    </InputGroup>
  );
}

export default SearchBar;
