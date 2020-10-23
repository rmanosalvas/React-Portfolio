import React from 'react';
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Component } from "react";


function Header () {
    return (
        <div>
            <Navbar bg="dark" expand="lg">
            <Navbar.Brand href="/">Ricardo Manosalvas</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/portfolio">Portfolio</Nav.Link>
                <Nav.Link href="/resume">Resume</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;


