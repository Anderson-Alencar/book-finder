import React from 'react';
import { Col, Row } from 'react-bootstrap';
import SearchBar from '../components/SearchBar';

function Home() {
  return (
    <div className="container">
      <Row className="justify-content-md-center text-center">
        <Col lg="6">
          <h1>BOOKS</h1>
          <SearchBar />
        </Col>
      </Row>
    </div>
  );
}

export default Home;
