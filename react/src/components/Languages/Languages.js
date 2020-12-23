import React from 'react';
import './Languages.css';
import {Row, Col, Container} from 'reactstrap';

function Languages() {
  return (
    <Container fluid className="languages">
      <Row>
        <Col className="lang-head">Node js</Col>
        <Col>React</Col>
        <Col>React Native</Col>
        <Col>Python</Col>
        <Col>PHP</Col>
        <Col>AWS</Col>
        <Col>Azure</Col>
        <Col>GCP</Col>
      </Row>
    </Container>
  );
}

export default Languages;
