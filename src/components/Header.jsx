import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Link to="/">Home</Link>
          <Link to="/add">add product</Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
