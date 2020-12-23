import React from "react";
import "./Home.css";
import { Container } from "reactstrap";

function Home() {
  return (
    <Container fluid className="home">
      <h1 className="build">BUILD BETTER</h1>
      <p className="text">We shape vision by cutting-edge technologies </p>
      <p className="text2">to create world class experience.</p>
    </Container>
  );
}

export default Home;
