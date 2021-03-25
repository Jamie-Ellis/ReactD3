import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import books from "../data/books.json";
import Comments from "./CommentsList";
import CommentsForm from "./AddComment";

class BooksList extends React.Component {
  state = {
    selectedBook: books[0],
  };

  render() {
    return (
      <Container>
        <h1>Latest Book Releases</h1>
        <p>The hottest books you can find on the web!</p>
        <Row className=" row row-cols-2 row-cols-md-3 row-cols-lg-4 mt-3">
          {books.map((book) => (
            <Col style={{ margins: "3px" }}>
              <Card
                key={book.asin}
                onClick={() =>
                  this.setState({
                    selectedBook: book,
                  })
                }
              >
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
          ))}
        </Row>
        <Row className=" row row-cols-2 row-cols-md-3 row-cols-lg-4 mt-3">
          <Col>
            <Comments />
          </Col>
        </Row>
        <Row className=" row row-cols-2 row-cols-md-3 row-cols-lg-4 mt-3">
          <Col>
            <CommentsForm />
          </Col>
        </Row>
      </Container>
    );
  }
}
export default BooksList;
