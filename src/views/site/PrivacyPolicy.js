import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Helmet} from "react-helmet";
import { motion } from 'framer-motion';

function PrivacyPolicy(props) {

    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} >
            <Container>
                <Helmet>
                    <title>Team Sun Touch | Privacy Policy</title>
                </Helmet>
                <Row className={"justify-content-center"}>
                    <Col lg={8}>
                        <h2 className={"text-center mb-5"}>Privacy Policy</h2>
                        <p>
                            This site doesn't store nor manipulate any data about it's users at all.
                        </p>
                    </Col>
                </Row>
            </Container>
        </motion.div>
    );
}

export default PrivacyPolicy;