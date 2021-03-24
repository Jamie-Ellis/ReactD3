import React from "react";
import { Col, Card } from "react-bootstrap";
import book from "../data/book.json";

const OneBook = (book) => (
  <Col style={{ margins: "3px" }}>
    <Card>
      <Card.Img
        style={{ height: "30vw" }}
        variant="top"
        src={book.img}
        alt={book.img}
      />
      <Card.Body style={{ height: "20vw" }}>
        <Card.Title>{book.title}</Card.Title>
      </Card.Body>
    </Card>
  </Col>
);

export default OneBook;
