import React, { useContext } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import BookContext from '../context/books/BookContext';

function PaginationBar() {
  const { currentPage, setCurrentPage } = useContext(BookContext);

  const handleClick = (number) => {
    setCurrentPage(number);
  };

  const items = [];
  for (let number = 1; number <= 4; number += 1) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === currentPage}
        onClick={() => handleClick(number)}
      >
        {number}
      </Pagination.Item>,
    );
  }

  return (
    <div>
      <Pagination>{items}</Pagination>
      <br />
    </div>
  );
}

export default PaginationBar;
