import React, {useState} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import {Helmet} from "react-helmet";
import { motion } from 'framer-motion';
import {ArrowLeft, ArrowRight} from "react-bootstrap-icons";
import {useLocation, useSearchParams} from "react-router-dom";

function Story(props) {
    const [searchParams] = useSearchParams();
    const [pageNumber, setPageNumber] = useState(0);

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

                <div>
                    <Button className={"float-end"} active={pageNumber <= 5}>Next <ArrowRight/></Button>
                    <Button className={"float-start"} active={pageNumber >= 1}><ArrowLeft/> Previous</Button>
                </div>
            </Container>
        </motion.div>
    );
}

export default Story;