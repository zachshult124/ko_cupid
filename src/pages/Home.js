import React from "react";
import Map from "../components/Map";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Carousel from "../components/Carousel";


const Home = () => (
  <div>
    <Map />
    <Container>
      <Row>
        <Col size="md-12">
          <Carousel />
        </Col>
      </Row>
    </Container>
  </div>
);

export default Home;
