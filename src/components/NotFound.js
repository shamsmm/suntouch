import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {Helmet} from "react-helmet";
import { motion } from 'framer-motion';

function NotFound() {

    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} >
            <Helmet>
                <title>Not Found!</title>
            </Helmet>
            <Container className={"mt-3 mb-5"}>
                <Row>
                    <Col lg={6} className={"mx-auto text-center"}>
                        <h1 className={"text-danger"} style={{fontSize: "8rem"}} >404!</h1>
                        <p>The requested resource is not found!</p>
                        <p>
                            <Link to={"/contact"}>Contact</Link> Us if you think that this is a problem with the server
                        </p>
                    </Col>
                </Row>
            </Container>
        </motion.div>
    );
}

export default NotFound;