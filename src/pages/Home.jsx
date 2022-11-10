import React from 'react';
import { Col, Row } from 'react-bootstrap';
import BookList from '../components/BookList';
import SearchBar from '../components/SearchBar';

function Home() {
  return (
    <div className="container">
      <Row className="justify-content-md-center text-center">
        <Col lg="12">
          <h1>BOOKS</h1>
          <SearchBar />
          <BookList />
        </Col>
      </Row>
    </div>
  );
}

export default Home;
