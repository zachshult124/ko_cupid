import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Carousel from "../components/Carousel";


const Home = () => (
  <div>
    <Hero backgroundImage="geolocation-feature.png">
      <h1>Map</h1>

    </Hero>
    <Container style={{ marginTop: 30 }}>
      <Row>
        <Col size="md-12">
          {/*<h1>Welcome To Pupster!</h1>*/}
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
          <Carousel></Carousel>

        </Col>
      </Row>
    </Container>
  </div>
);

export default Home;
