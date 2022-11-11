import React, { useContext, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import BookList from '../components/BookList';
import SearchBar from '../components/SearchBar';
import BookContext from '../context/books/BookContext';
import getBooks from '../api/requests';
import PaginationBar from '../components/PaginationBar';

function Home() {
  const { books, setBooks, setLoading } = useContext(BookContext);

  const [search, setSearch] = useState('');

  const searchBooks = async () => {
    setLoading(true);
    const data = await getBooks(search);
    if (data.items) {
      const volumes = data.items.map((item) => item.volumeInfo);
      setBooks(volumes);
    } else {
      setBooks([]);
    }
    setLoading(false);
  };

  return (
    <div className="container">
      <Row className="justify-content-md-center text-center">
        <Col lg="12">
          <h1>BOOKS</h1>
          <SearchBar
            search={search}
            setSearch={setSearch}
            searchBooks={searchBooks}
          />
          <BookList />
          {books.length > 0 && <PaginationBar />}
        </Col>
      </Row>
    </div>
  );
}

export default Home;
