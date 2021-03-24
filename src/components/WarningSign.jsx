import React from "react";
import { Alert } from "react-bootstrap";

const AlertStore = (prop) => (
  <Alert variant="danger">
    <Alert.Heading>Hey, nice to see you</Alert.Heading>
    <p>
      {prop.text}
    </p>
    <hr />
    <p className="mb-0">
      Whenever you need to, be sure to use margin utilities to keep things nice
      and tidy.
    </p>
  </Alert>
);

export default AlertStore;
