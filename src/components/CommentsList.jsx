import React from "react";
import { Alert, ListGroup, Spinner } from "react-bootstrap";

// render will be called ONCE after the constructor (for displaying the initial state of your component)
// it will be called AGAIN every time there is a change in the state or in the props

class Comments extends React.Component {
  constructor(props) {
    super(props);
    // this is really the first method invoked upon component construction
    console.log("THIS IS THE CONSTRUCTOR");
    // the constructor is useless for 90% of the time
  }

  // let's learn a couple of things about component lifecycle

  state = {
    isLoading: true,
    isError: false,
    comments: [],
  };

  componentDidMount = async (prop) => {
    // this will just happen once!!
    console.log("THIS IS COMPONENTDIDMOUNT");
    // componentDidMount is the PERFECT PLACE for fetching outside data and update our state
    // fetch
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/prop.asin",
        {
          method: "GET",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDUxZWVhODg5YzI2ZjAwMTU3ZjljMmEiLCJpYXQiOjE2MTY2Nzc0NDMsImV4cCI6MTYxNzg4NzA0M30.Zck_ederOvNfa6AfONa2vptt16Bl2KtJ8E5vX5iZZtI",
          },
        }
      );
      console.log(response);
      if (response.ok) {
        let comments = await response.json();
        console.log(comments);
        this.setState({
          // reservations: reservations
          comments,
          isLoading: false,
        });
      } else {
        this.setState({
          isLoading: false,
          isError: true,
        });
      }
    } catch (error) {
      this.setState({
        isLoading: false,
        isError: true,
      });
      console.log(error);
    }
  };

  render() {
    console.log("THIS IS THE RENDER", this.state);
    // render is triggered everytime the component is re-rendered
    // a re-render happens every time there is a change in the STATE or in the PROPS of this component

    // this.setState({
    //     reservations: [{ name: 'Stefano', numberOfPersons: '5', dateTime: '9817984389' }]
    // })
    // THIS IS BAD, YOUR COMPONENT WILL BE STUCK INTO AN INFINITE LOOP

    return (
      <>
        <h5>Comments</h5>
        <div className="my-3">
          {/* here we'll put our map */}
          {this.state.isLoading && (
            <Spinner animation="border" variant="success" />
          )}

          {!this.state.isLoading &&
            this.state.comments.length === 0 &&
            !this.state.isError && <p>No comments yet!</p>}

          {this.state.isError && (
            <Alert variant="danger">
              <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
              <p>
                Change this and that and try again. Duis mollis, est non commodo
                luctus, nisi erat porttitor ligula, eget lacinia odio sem nec
                elit. Cras mattis consectetur purus sit amet fermentum.
              </p>
            </Alert>
          )}

          {this.state.comments.map((comment) => (
            <ListGroup key={comment.asin}>
              <ListGroup.Item>
                <p>
                  Comment: {comment.comment} - Rating: {comment.rating} stars.
                </p>
              </ListGroup.Item>
            </ListGroup>
          ))}
        </div>
      </>
    );
  }
}

export default Comments;

// whenever you need to fetch data for your component
// you'll need a class based component

// initially, the state is empty and so we're not displaying anything from our .map()
// then componentDidMount happens and we fetch the data. then we save the data into the state
// because there's a change in the state, react will invoke render() again
// and now the array of reservations is filled up! so the map will output all the reservations
