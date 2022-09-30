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

                        <h3>Cookie Policy</h3>
                        <p>
                            To provide the best experience and seamless transition between website languages, the website may store session or cookie data including user language and user may choose to save name, e-mail address to customize his experience while posting comments and other related cookies/session data including google analytics (see Analytics section), and/or embedded content(see Youtube & embedded links policy), plus Facebook services.
                        </p>
                        <h3>Analytics Services</h3>
                        <p>
                            This site uses only Google analytics service to collect data about visitors to enhance website internationally, data collected by Google analytics include device (mobile & desktop) country and other data, you can read Google Analytics privacy policy if you wish.
                        </p>
                    </Col>
                </Row>
            </Container>
        </motion.div>
    );
}

export default PrivacyPolicy;