import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

class InputSearch extends React.Component {
  state = {
    book: {
      title: ""
    }
  };

  handleSearch = (e) => {
    let id = e.target.id;
    console.log("ID OF THIS INPUT FIELD IS", id);
    this.setState({
      book: {
       
       title: e.target.value,
      },
    });
  };
  submitSearch = (e) => {
    e.preventdefault();
  };
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Form onSubmit={this.submitSearch}>
              <Form.Group>
                <Form.Label>Search</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Search"
                  onChange={this.handleSearch}
                  value={this.state.book.title}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default InputSearch;
