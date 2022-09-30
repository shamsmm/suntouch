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
            </div>
            <div className={"text-center px-3 py-5 mt-3 text-light"} style={{background: "linear-gradient(to right bottom, rgb(255 59 15) 0%, rgb(230, 211, 5) 100%)"}}>
                <h1>Story</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis egestas porta.</p>
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
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis egestas porta.</p>
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