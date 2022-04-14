import React from 'react';
import { Container, Nav, Navbar, NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
  <Navbar sticky='top' bg="primary" variant="dark">
    <Container>
    <Navbar.Brand as={Link} to="/">Car Service Centerr</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link as={Link} to="home">Home</Nav.Link>
      <Nav.Link href="home#services">Services</Nav.Link>
      <Nav.Link href="home#experts">Experts</Nav.Link>
    </Nav>
    <Nav>
  <Nav.Link as={Link} to="about">About</Nav.Link>
      <Nav.Link as={Link} to="login">Login</Nav.Link>
  </Nav>
    </Container>
  </Navbar>
 
</>
    );
};

export default Header;