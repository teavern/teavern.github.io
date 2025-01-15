import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

/**
 * Navbar component for all pages
 */
function Navigation() {
        return (
            <Navbar bg="dark" expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand href="/">Art by Teavern</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/#/commissions">Commissions</Nav.Link>
                        <Nav.Link href="/#/gallery">Gallery</Nav.Link>
                        <NavDropdown title="Links" id="basic-nav-dropdown">
                            <NavDropdown.Item href="https://twitter.com/teavernart" target="_blank">Twitter</NavDropdown.Item>
                            <NavDropdown.Item href="https://furaffinity.net/user/teavern" target="_blank">Furaffinity</NavDropdown.Item>
                            <NavDropdown.Item href="https://trello.com/b/fw8j8bAJ/teaverns-art-board" target="_blank">Trello</NavDropdown.Item>
                            <NavDropdown.Item href="mailto:teavern.draws@gmail.com">Email</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
}
/**
 *                         <NavDropdown title="Projects" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#wyverns">Wyvern Dossier</NavDropdown.Item>
                        </NavDropdown>
 */
export default Navigation;