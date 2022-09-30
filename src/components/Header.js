import React from 'react';
import { Col, Container, Row } from "react-bootstrap";

function Header(props) {
    return (
        <Container className={"header"} >
            <Row className={"justify-content-center"}>
                <Col lg={8} md={8}>
                    <h1 style={{fontSize: "3.5rem"}}>Parker Solar Probe</h1>
                </Col>
            </Row>
            <Row className={"justify-content-center"}>
                <Col lg={8} md={8}>
                    <p className={"display-6"}>Parker Solar Probe</p>
                </Col>
            </Row>
        </Container>
    );
}

export default Header;