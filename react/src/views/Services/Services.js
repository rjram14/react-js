import React from "react";
import "./Services.css";
import { Row, Col, Container } from "reactstrap";
import ServicesCard from "../../components/ServicesCard/ServicesCard";

function Services() {
  return (
    <Container fluid className="services">
      <Row>
        <Col className="services-head">SERVICES</Col>
      </Row>
      <Row>
        <Col className="tagline">Design. Development. Consultancy</Col>
      </Row>
      <Row>
        <Col className="service-card1">
          <ServicesCard>fgg</ServicesCard>
        </Col>
        <Col className="service-card2">
          <ServicesCard>fgg</ServicesCard>
        </Col>
        <Col className="service-card3">
          <ServicesCard>fgg</ServicesCard>
        </Col>
      </Row>
    </Container>
  );
}

export default Services;
