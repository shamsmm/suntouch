import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Helmet} from "react-helmet";
import { motion } from 'framer-motion';
import {Link} from "react-router-dom";
import {ArrowRight} from "react-bootstrap-icons";

function Videos(props) {

    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} >
            <Helmet>
                <title>Team Sun Touch | Educational Videos</title>
            </Helmet>
            <div className={"text-center px-3 py-5 mt-3"} >
                <h1>Educational Videos</h1>
                <Container className={"mt-5"}>
                    <Row className={"justify-content-center gy-5"}>
                        <Col lg={8}>
                            <h2>Main Video</h2>
                            <p>All 3D graphics, voice overs, design & implementation by Team Sun Touch</p>
                            <div className="ratio ratio-16x9">
                                <iframe
                                    src="https://www.youtube.com/embed/xPkxG4qos7g"
                                    title="YouTube video"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </Col>
                    </Row>
                    <Row className={"justify-content-center gy-5 mt-5"}>
                        <Col lg={6}>
                            <h2>Suggested Video from official NASA</h2>
                            <div className="ratio ratio-16x9 mt-3">
                                <iframe
                                    src="https://www.youtube.com/embed/xPkxG4qos7g"
                                    title="YouTube video"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <h2>Young Audience reaction of our Story</h2>
                            <div className="ratio ratio-16x9 mt-3">
                                <iframe
                                    src="https://www.youtube.com/embed/xPkxG4qos7g"
                                    title="YouTube video"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </motion.div>
    );
}

export default Videos;