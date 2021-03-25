import React from "react";
import { Button, Form } from "react-bootstrap";

class CommentForm extends React.Component {
  state = {
    comment: {
      comment: "",
      rate: "",
      elementId: ""
    },
  };

  handleInput = (e) => {
    let id = e.target.id;
    console.log("ID OF THIS INPUT FIELD IS", id);

    this.setState({
      comment: {
        ...this.state.comment,
        [id]: e.target.value,
      },
    });
  };

  submitData = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${this.state.comment.elementId}`,
        {
          method: "POST",
          body: JSON.stringify(this.state.comment),
          headers: {
            "Content-type": "application/json",
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDUxZWVhODg5YzI2ZjAwMTU3ZjljMmEiLCJpYXQiOjE2MTY2Nzc0NDMsImV4cCI6MTYxNzg4NzA0M30.Zck_ederOvNfa6AfONa2vptt16Bl2KtJ8E5vX5iZZtI"
            },
        }
      );
      if (response.ok) {
        alert("your comment has been posted");
        this.setState({
          comment: {
            comment: "",
            rate: "",
            elementId: ""
          },
        });
      } else {
        alert("there was a problem");
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <>
        <h5>Add a comment</h5>
        <Form onSubmit={this.submitData}>
          <Form.Group>
            <Form.Label>Your Comment</Form.Label>
            <Form.Control
              onChange={this.handleInput}
              value={this.state.comment.comment}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Star Rating?</Form.Label>
            <Form.Control
              id="rating"
              as="select"
              value={this.state.comment.rating}
              onChange={this.handleInput}
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </>
    );
  }
}

export default CommentForm;
