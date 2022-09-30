import React from 'react';
import {Col, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

function Footer(props) {

    return (
        <footer className="footer text-dark">
            <Row>
               <Col className={"text-start"}>
                    <span>
                        Team Sun Touch © 2022 - All Rights Reserved.
                    </span>
               </Col>
                <Col className={"text-end"}>
                    <span>
                        <Link to={"/privacy-policy"} className={"mx-1"}>{"Privacy Policy"}</Link>
                    </span>
                </Col>
            </Row>
        </footer>
    );
}

export default Footer;