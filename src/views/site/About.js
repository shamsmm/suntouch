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
                            SUN TOUCH! What exactly does it do? How does it work?

                            First, SUN TOUCH lets the user choose the way he wants to learn from. There are scientific details, comic strips, videos, and quizzes.

                            The first part is a comic strip showing the mission of Parker Solar Probe in a simple way for children. The story tells the reader about the challenges NASA faced and how it overcame them. The high temperature was such a challenge and how long it took to find the perfect material and make the protective shield. After reading the story, we provide some quizzes to test the learning outcomes of the story and make sure that the reader understands the main idea.



                            The second part is a page that provides all the scientific data in detail. This page is meant to present more certified information for any reader. On this page, we show the challenges that faced NASA and the steps that were taken to find the perfect solution, like the challenge of temperature and energy. Another important topic is the rotation around Venus. This rotation has the main role in completing the mission successfully. When Parker's solar probe enters the gravity field, it gives them the push to reach the corona.



                            We have a dedicated page for the best educational videos that describe scientific data in an easy manner that could be understood by any age group, as well as custom professionally made videos. we made a documentary for the mission from the planning to the moment of the touching. In addition, there is a feedback video from children giving their reactions after reading the story. In the future, there will be more animated videos.



                            All that was possible thanks to multiple advanced technologies, The website was created using ReactJS front-end framework offering a smooth and interactive interface with it, languages used were mainly JavaScript, SCSS & HTML, and for easy hosting and deployment, the whole application is containerized using Docker. The professionally made custom videos utilized Davinci Resolve 18, a Hollywood grade professional & advanced video editing solution. For our custom 3D images & Animations, Blender 3D was used.


                        </p>
                    </Col>
                </Row>
            </Container>
        </motion.div>
    );
}

export default About;