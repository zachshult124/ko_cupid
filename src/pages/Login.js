import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Form from "../components/Form";

const Login = () => (
    <div>

        <Container>
            <Row>
                <Col size="md-12">
                    <Form />
                </Col>
            </Row>
        </Container>
    </div>
);

export default Login;