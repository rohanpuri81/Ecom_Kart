import React from "react";
import ecom from "../assets/ecom.svg";
import { NavLink } from "react-router-dom";
import { Nav, Navbar, Container } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand>
          <NavLink style={{ textDecoration: "none" }} to={"/"}>
            <img src={ecom} alt="logo" className="mainLogo" /> EcomKart
          </NavLink>
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
