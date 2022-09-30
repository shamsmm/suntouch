import React from 'react';
import { Col, Container, Row } from "react-bootstrap";

function Header(props) {
    return (
        <Container  className={"my-5"}>
            <Row className={"justify-content-center"}>
                <Col lg={6} >
                    Header
                </Col>
            </Row>
            <br/>
            <Row className={"justify-content-center gy-5"}>
                Buttons
            </Row>
        </Container>
    );
}

export default Header;