import React, {useState} from 'react';
import {Container, Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import {Link, NavLink} from "react-router-dom";

function UserNavigation({ handleLogout, user}) {

    return (
        <Navbar bg="primary" expand="lg" variant="dark" sticky="top" >
            <Container>
                <Navbar.Brand as={Link} to={"/"} >
                    <img
                        alt=""
                        // src={}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />
                    {"  "}
                    Sun Touch | Parker Solar Probe
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end flex-grow-1 pe-3">
                    <Nav>
                        <Nav.Link as={NavLink} to={"/about"} >
                            About
                        </Nav.Link>
                        <div className={"vr mx-2 d-none d-md-block h-50 m-auto"}/>
                        <Nav.Link as={NavLink} to={"/story"} >
                            Story
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default UserNavigation;