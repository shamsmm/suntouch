import React, {useState} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import {Helmet} from "react-helmet";
import { motion } from 'framer-motion';
import {ArrowLeft, ArrowRight} from "react-bootstrap-icons";
import {Link, useLocation, useSearchParams} from "react-router-dom";
import {image1, image2, image3, image4, image5} from "../../assets/images";
import cover from "../../assets/images/cover.jpg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function Story(props) {

    const cards = [
        {
            img: image1,
        },
        {
            img: image2,
        },
        {
            img: image3,
        },
        {
            img: image4,
        },
        {
            img: image5,
        },
    ];

    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} >
            <Container>
                <Helmet>
                    <title>Team Sun Touch | Story</title>
                </Helmet>
                <Row className={"justify-content-center"}>
                    <Col lg={8}>
                        <h2 className={"text-center mb-3"}>Story</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis egestas porta. Aenean condimentum, lorem in pulvinar ullamcorper, libero elit ornare enim, quis fermentum felis arcu nec orci.
                        </p>
                    </Col>
                </Row>
            </Container>
            <div>
                {cards.map((card) => <Row className={"shadow-lg my-5 rounded-3 mx-3 p-0"}>
                    <img src={card.img} />
                </Row>)}
            </div>
            <Container>
                <Row className={"justify-content-center"}>
                    <Col lg={8}>
                        <h2 className={"text-center mb-3 congrats"} >Congratulations on finishing this story!</h2>
                        <p>
                            Now what about taking a quick quiz to see how much information you gained in a buttery-smooth way throughout this story :)
                        </p>
                        <p>
                            Taking the quiz on the mobile app can give you prizes!!!
                        </p>
                    </Col>
                </Row>
            </Container>
        </motion.div>
    );
}

export default Story;