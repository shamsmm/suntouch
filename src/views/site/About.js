import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Helmet} from "react-helmet";
import { motion } from 'framer-motion';

function About(props) {

    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} >
            <Container>
                <Helmet>
                    <title>Team Sun Touch | About</title>
                </Helmet>
                <Row className={"justify-content-center"}>
                    <Col lg={8}>
                        <h2 className={"text-center mb-5"}>About</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis egestas porta. Aenean condimentum, lorem in pulvinar ullamcorper, libero elit ornare enim, quis fermentum felis arcu nec orci. Vestibulum ac diam nec risus mattis tempus. Donec sollicitudin pharetra dapibus. Aliquam erat volutpat. Etiam sem dolor, ultrices vitae luctus non, mattis quis risus. Nullam ullamcorper ullamcorper orci, eget placerat diam. Maecenas tortor tortor, volutpat mollis mauris ut, hendrerit varius elit. Nullam at diam orci. Suspendisse quis dignissim odio. In interdum vehicula orci malesuada pharetra. Aliquam quis leo odio. Donec lobortis nec tellus vitae fermentum. Cras a dui nulla. Sed tempor libero tincidunt ex congue molestie.
                        </p>
                    </Col>
                </Row>
            </Container>
        </motion.div>
    );
}

export default About;