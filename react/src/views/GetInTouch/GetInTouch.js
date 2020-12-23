import React from 'react';
import './GetInTouch.css';
import {Row, Col, Container, Button} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function GetInTouch() {
  return (
    <Container fluid className="get-in-touch">
      <p className="get-in-head">Ready? Let’s build something great!</p>
      <Button className="get-in-button" outline>
        Get In Touch
      </Button>
    </Container>
  );
}

export default GetInTouch;
