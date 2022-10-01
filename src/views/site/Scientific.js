import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Helmet} from "react-helmet";
import { motion } from 'framer-motion';

function Scientific(props) {

    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} >
            <Container>
                <Helmet>
                    <title>Team Sun Touch | Some Scientific Data</title>
                </Helmet>
                <Row className={"justify-content-center"}>
                    <h2 className={"text-center mb-5"}>Some Scientific Data</h2>
                    <Container className={"mt-5"}>
                        <Row className={"gy-3 pt-3"}>
                            <Col lg={6}>
                                <img src={"https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1440,w_720,f_auto,q_auto/8876990/843792_370983.jpeg"} className={"w-75 rounded-3 shadow-lg"}/>
                            </Col>
                            <Col lg={6}>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis egestas porta. Aenean condimentum, lorem in pulvinar ullamcorper, libero elit ornare enim, quis fermentum felis arcu nec orci. Vestibulum ac diam nec risus mattis tempus. Donec sollicitudin pharetra dapibus. Aliquam erat volutpat. Etiam sem dolor, ultrices vitae luctus non, mattis quis risus. Nullam ullamcorper ullamcorper orci, eget placerat diam. Maecenas tortor tortor, volutpat mollis mauris ut, hendrerit varius elit. Nullam at diam orci. Suspendisse quis dignissim odio. In interdum vehicula orci malesuada pharetra. Aliquam quis leo odio. Donec lobortis nec tellus vitae fermentum. Cras a dui nulla. Sed tempor libero tincidunt ex congue molestie.
                                </p>
                            </Col>
                        </Row>
                        <Row className={"gy-3 pt-5"}>
                            <Col lg={6}>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis egestas porta. Aenean condimentum, lorem in pulvinar ullamcorper, libero elit ornare enim, quis fermentum felis arcu nec orci. Vestibulum ac diam nec risus mattis tempus. Donec sollicitudin pharetra dapibus. Aliquam erat volutpat. Etiam sem dolor, ultrices vitae luctus non, mattis quis risus. Nullam ullamcorper ullamcorper orci, eget placerat diam. Maecenas tortor tortor, volutpat mollis mauris ut, hendrerit varius elit. Nullam at diam orci. Suspendisse quis dignissim odio. In interdum vehicula orci malesuada pharetra. Aliquam quis leo odio. Donec lobortis nec tellus vitae fermentum. Cras a dui nulla. Sed tempor libero tincidunt ex congue molestie.
                                </p>
                            </Col>
                            <Col lg={6}>
                                <img src={"https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1440,w_720,f_auto,q_auto/8876990/514902_408570.jpeg"} className={"w-75 rounded-3 shadow-lg"}/>
                            </Col>
                        </Row>
                    </Container>
                </Row>
            </Container>
        </motion.div>
    );
}

export default Scientific;