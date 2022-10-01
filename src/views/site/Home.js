import React from 'react';
import { motion } from 'framer-motion';
import {Button, Col, Container, Row} from "react-bootstrap";
import {Helmet} from "react-helmet";
import {Link} from "react-router-dom";
import {ArrowRight} from "react-bootstrap-icons";
import storyCover from "../../assets/images/cover.jpg";

function Home(props) {

    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} style={{padding: 0}}>
            <Helmet>
                <title>Team Sun Touch | Home</title>
            </Helmet>
            <div className={"text-center px-3 py-5 mt-3"}>
                <h1>Overview</h1>

                <Container className={"mt-5"}>
                    <Row className={"gy-3 pt-3"}>
                        <Col lg={6}>
                            <img src={"https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1440,w_720,f_auto,q_auto/8876990/843792_370983.jpeg"} className={"w-75 rounded-3 shadow-lg"}/>
                        </Col>
                        <Col lg={6}>
                            <h2>The Launching</h2>
                            <ul className={"text-start"}><li><strong>Launch:</strong>&nbsp;Aug. 12, 2018</li><li><strong>Launch Site:</strong>&nbsp;Cape Canaveral Air Force Station, Florida</li><li><strong>Launch Vehicle:</strong>&nbsp;Delta IV-Heavy with Upper Stage</li></ul>
                        </Col>
                    </Row>
                    <Row className={"gy-3 pt-5"}>
                        <Col lg={6}>
                            <h2>The First Touch</h2>
                            Parker Solar Probe performs its scientific investigations in a hazardous region of intense heat and solar radiation. The spacecraft will fly close enough to the Sun to watch the solar wind speed up from subsonic to supersonic, and it will fly though the birthplace of the highest-energy solar particles.
                        </Col>
                        <Col lg={6}>
                            <img src={"https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1440,w_720,f_auto,q_auto/8876990/514902_408570.jpeg"} className={"w-75 rounded-3 shadow-lg"}/>
                        </Col>
                    </Row>
                    <Row className={"gy-3 pt-5"}>
                        <Col lg={6}>
                            <img src={"https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1440,w_720,f_auto,q_auto/8876990/843792_370983.jpeg"} className={"w-75 rounded-3 shadow-lg"}/>
                        </Col>
                        <Col lg={6}>
                            <h2>Teaming for Success</h2>
                            <p>Parker Solar Probe is part of NASA’s Living With a Star program to explore aspects of the Sun-Earth system that directly affect life and society. The Living With a Star flight program is managed by the agency’s Goddard Space Flight Center in Greenbelt, Maryland, for NASA’s Science Mission Directorate in Washington. The Johns Hopkins University Applied Physics Laboratory (APL) in Laurel, Maryland, manages the mission for NASA. APL designed, built, and operates the spacecraft.</p>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className={"text-center px-3 py-5 mt-3 text-light"} style={{background: "linear-gradient(to right bottom, rgb(255 59 15) 0%, rgb(230, 211, 5) 100%)"}}>
                <h1>Story</h1>
                <p>Our story is an opening gate to solar parker probe. It simplifies the challenges of solar parker probe and it indicates the great efforts that exerted through the whole challenge.</p>
                <Link to={"/story"} size={"lg"} className={"btn btn-outline-light rounded-pill"} >
                    View Story <ArrowRight/>
                </Link>
                <Container className={"mt-5"}>
                    <Row className={"justify-content-center gy-5"}>
                        <Col lg={6}>
                            <img src={storyCover} className={"rounded-3 shadow-lg"} alt={""} height={500}/>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className={"text-center px-3 py-5 mt-3"} >
                <h1>Educational Videos</h1>
                <p>These are our visual references to the audience; it indicates how the challenge is a great milestone in our space explorations history.</p>
                <Link to={"/videos"} size={"lg"} className={"btn btn-outline-dark rounded-pill"} >
                    View All Videos <ArrowRight/>
                </Link>
                <Container className={"mt-5"}>
                    <Row className={"justify-content-center gy-5"}>
                        <Col lg={8}>
                            <div className="ratio ratio-16x9">
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
            {/*<div className={"text-center px-3 py-5 mt-3"} style={{background: "linear-gradient(to bottom right, hsl(281deg 100% 53%) 0%, hsl(55deg 96% 46%) 100%)"}}>*/}
            {/*    <h2 className={"text-light"}>Overview</h2>*/}
            {/*    <Container>*/}
            {/*    </Container>*/}
            {/*</div>*/}
        </motion.div>
    );
}

export default Home;