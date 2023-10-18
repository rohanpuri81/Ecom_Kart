import React, { useState } from "react";
import ecom from "../assets/ecom.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Nav, Navbar, Container } from "react-bootstrap";

const Header = () => {
  const history = useNavigate();
  const dispatch = useDispatch();

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
