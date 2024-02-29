import React from 'react';
import { Link } from 'react-scroll';
import { Navbar, Nav } from 'react-bootstrap';

const CustomNavbar = () => {
    const duration = 350;
    return (
        <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
            <Navbar.Toggle  style={{ marginLeft: 'auto' }} aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" style={{ marginLeft: 'auto', textAlign: 'center' }}>
                <Nav style={{ marginLeft: 'auto' }}>
                    <Link to="Home" spy={true} smooth={true} duration={duration}>
                        <Nav.Link style={{ marginRight: '15px', fontWeight: 'bold' }}>HOME</Nav.Link>
                    </Link>
                    <Link to="about" spy={true} smooth={true} duration={duration}>
                        <Nav.Link style={{ marginRight: '15px', fontWeight: 'bold' }}>ABOUT ME</Nav.Link>
                    </Link>
                    <Link to="portfolio" spy={true} smooth={true} duration={duration}>
                        <Nav.Link style={{ marginRight: '15px', fontWeight: 'bold' }}>PROJECTS</Nav.Link>
                    </Link>
                    <Link to="skills" spy={true} smooth={true} duration={duration}>
                        <Nav.Link style={{ marginRight: '15px', fontWeight: 'bold' }}>SKILLS</Nav.Link>
                    </Link>
                    <Link to="contact" spy={true} smooth={true} duration={duration}>
                        <Nav.Link style={{ marginRight: '15px', fontWeight: 'bold' }}>CONTACT</Nav.Link>
                    </Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default CustomNavbar;
