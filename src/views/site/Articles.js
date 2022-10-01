import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Helmet} from "react-helmet";
import { motion } from 'framer-motion';

function Articles(props) {

    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} >
            <Container>
                <Helmet>
                    <title>Team Sun Touch | Struggles & Solutions</title>
                </Helmet>
                <Row className={"justify-content-center"}>
                    <h2 className={"text-center mb-5"}>Struggles & Solutions</h2>
                    <Container className={"mt-5"}>
                        <Row className={"gy-3 pt-3"}>
                            <Col lg={6}>
                                <img src={"https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1440,w_720,f_auto,q_auto/8876990/843792_370983.jpeg"} className={"w-75 rounded-3 shadow-lg"}/>
                            </Col>
                            <Col lg={6}>
                                <h2>PSP does not carry a dust detector</h2>
                                <p>
                                    the high-velocity impacts create clouds of plasma → that produce unique electrical charges → that are picked up by several sensors on the probe’s FIELDS instrument (designed to measure the electric and magnetic fields near the Sun)
                                    They designed materials and components that survive hypervelocity dust impacts and the effects of the even smaller particles created in these impacts; the makeup and effects of the dust environment were modeled, tested how materials react to the dust particles, and installed fault-tolerant onboard systems that are keeping Parker Solar Probe safe in this unexplored region.
                                </p>
                            </Col>
                        </Row>
                        <Row className={"gy-3 pt-5"}>
                            <Col lg={6}>
                                <h4>the star tracking cameras used as part of the guidance and control system see reflected light from dust and shattering particles that can momentarily disrupt their ability to see stars</h4>
                                <p>the guidance and control software use data from the star trackers in tandem with an inertial measurement unit and solar-limb sensors to keep the Thermal Protection System – the heat shield – pointed toward the Sun</p>
                            </Col>
                            <Col lg={6}>
                                <img src={"https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1440,w_720,f_auto,q_auto/8876990/514902_408570.jpeg"} className={"w-75 rounded-3 shadow-lg"}/>
                            </Col>
                        </Row>
                        <Row className={"gy-3 pt-5 justify-content-center mt-5"}>
                            <Col lg={8}>
                                <h1 className={"text-center"}>Benefits</h1>
                                <p>mission scientists have used this data (e.g. to construct comprehensive pictures of the structure and behavior of the large cloud of dust that swirls through the innermost solar system → offers clues to similar clouds around stars across the universe i.e. zodiacal cloud)
                                    zodiacal cloud: A cloud of dust , lying in the plane of the ecliptic , that gives rise to the zodiacal light
                                    Data: measuring of the cloud itself and how it loses materials; gathering data from Parker Solar Probe's first six orbits around the Sun, the researchers saw impacts that were consistent with the two primary dust populations in the cloud. The first population (makes up the bulk of the zodiacal cloud → most of the grains are being slowly pulled in toward the Sun → as the swirling cloud gets denser → the larger grains collide and create fragments → which get smaller → pushed out of the solar system in all directions by pressure from sunlight) & This second population of smaller fragments (i.e. β-meteoroids)
                                    Metroid’s stream: causing a spike in dust impacts - much like how we see a meteor shower when Earth moves through one of these streams; e.g. Geminids stream, which each December causes one of the most intense meteor showers at Earth - was colliding at high speeds into the inner zodiacal cloud itself. These impacts with zodiacal dust produce large quantities of beta-meteoroids that don't blast off in random directions but are focused into a narrow set of paths i.e. beta-stream that occur with every meteoroid stream in every dust cloud in the universe
                                    Extra data: the FIELDS instrument was configured to indicate from which direction meteoroids were hitting the spacecraft e.g. The data show distinct dust impacts hitting the spacecraft from behind, indicating particles that would have to catch up and exceed the speed of the spacecraft
                                    WISPR instrument: Wide-field Imager for Parker Solar Probe, captured the first complete view of Venus’ dust ring, a band of particles that stretches for the entirety of the planet’s path around the Sun
                                    Summary: While learning about space dust isn’t a prime mission science goal, the WISPR and FIELDS have planned for specifically investigating near-Sun dust – in a region of the solar system where no mission has ever operated; the researchers added that these measurements have already helped them to better understand the collisional evolution of our solar system's dust cloud, in a region previously unexplored by any spacecraft, and may also very well have provided direct observations of how a meteoroid stream collides with, and erodes, our zodiacal cloud.</p>
                            </Col>
                        </Row>
                    </Container>
                </Row>
            </Container>
        </motion.div>
    );
}

export default Articles;