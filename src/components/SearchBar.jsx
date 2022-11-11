import React from 'react';
import { InputGroup, Form, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

function SearchBar({ search, setSearch, searchBooks }) {
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

SearchBar.propTypes = {
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
  searchBooks: PropTypes.func.isRequired,
};
