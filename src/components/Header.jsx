import React, { useState } from "react";
import ecom from "../assets/ecom.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { setBtnShow } from "../STORE/SLICES/LogOut_Slice";
import { useDispatch, useSelector } from "react-redux";
import { Nav, Navbar, Container } from "react-bootstrap";

const Header = () => {
  const history = useNavigate();
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.logOutBtn);

  function log_out() {
    let login_Check = localStorage.hasOwnProperty("user_login");

    if (login_Check) {
      let log_details = localStorage.getItem("user_login");
      log_details = JSON.parse(log_details);
      if (log_details.length !== 0) {
        localStorage.removeItem("user_login");
        dispatch(setBtnShow(false));
        history("/");
      }
    }
  }
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
        {status && (
          <form className="d-flex" role="search">
            <button
              className="btn btn-outline-success"
              type="submit"
              onClick={log_out}
            >
              Logout
            </button>
          </form>
        )}
      </Container>
    </Navbar>
  );
};

export default Header;
