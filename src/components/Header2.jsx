import React, { useEffect, useState } from "react";
import { Nav, Navbar, Container, Button, Table } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Badge from "@mui/material/Badge";
import Menu from "@mui/material/Menu";
import { setBtnShow } from "../redux/LogOut_Slice";
import { useSelector, useDispatch } from "react-redux";
import { RMV_CART, REM_ALL } from "../redux/CartSlice";
import "./style.css";
import ecom from "../assets/ecom.svg";
import { useNavigate } from "react-router-dom";

const Header2 = () => {
  const history = useNavigate();
  const dispatch = useDispatch();
  const getdata = useSelector((state) => state.cart);
  const [price, setPrice] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

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

  console.log(getdata);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const delee = (id) => {
    dispatch(RMV_CART(id));
  };

  const total = () => {
    let pric = 0;
    getdata.cart.map((ele, k) => {
      pric += ele.price * ele.qnty;
    });
    setPrice(pric);
  };

  useEffect(() => {
    total();
  }, [total]);

  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark" style={{ height: "60px" }}>
        <Container>
          <NavLink style={{ textDecoration: "none" }} to={"/"}>
            <img src={ecom} alt="logo" className="mainLogo" /> Products
          </NavLink>

          <Badge
            badgeContent={getdata.cart.length}
            color="primary"
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <i
              className="fa-solid fa-cart-shopping text-light"
              style={{ fontSize: 25, cursor: "pointer" }}
            ></i>
          </Badge>

          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            {getdata.cart.length ? (
              <div
                className="card_details"
                style={{ width: "24rem", padding: 10 }}
              >
                <Table>
                  <thead>
                    <tr>
                      <th>Photo</th>
                      <th>Restaurant name</th>
                    </tr>
                  </thead>
                  <tbody>
                    {getdata.cart.map((e, i) => {
                      return (
                        <>
                          <tr>
                            <td>
                              <NavLink
                                to={`/cart/${e.id}`}
                                onClick={handleClose}
                              >
                                <img
                                  src={e.imgdata}
                                  alt="pr_img"
                                  style={{ width: "5rem", height: "5rem" }}
                                />
                              </NavLink>
                            </td>
                            <td>
                              <p>
                                <strong>{e.rname}</strong>
                              </p>
                              <p>Price : Rs. {e.price}</p>
                              <p>Quantity : {e.qnty}</p>
                              <p>
                                <i
                                  style={{
                                    fontSize: "20px",
                                    color: "red",
                                    cursor: "pointer",
                                  }}
                                  onClick={() => delee(e.id)}
                                  className="fa-solid fa-trash smalltrash"
                                ></i>
                              </p>
                            </td>
                            <td className="mt-5 ">
                              <i
                                style={{
                                  fontSize: "20px",
                                  color: "red",
                                  cursor: "pointer",
                                }}
                                onClick={() => delee(e.id)}
                                className="fa-solid fa-trash largetrash"
                              ></i>
                            </td>
                          </tr>
                        </>
                      );
                    })}

                    <p className="text-center">Total : Rs. {price}</p>
                    <Button
                      onClick={() => {
                        alert("Order Successful");
                        handleClose();
                        dispatch(REM_ALL());
                      }}
                    >
                      Proceed To Pay
                    </Button>
                  </tbody>
                </Table>
              </div>
            ) : (
              <div
                className="card_details d-flex justify-content-center align-items-center"
                style={{ width: "24rem", padding: 10, position: "relative" }}
              >
                <i
                  className="fa-solid fa-x smallclose"
                  onClick={handleClose}
                  style={{
                    position: "absolute",
                    top: 2,
                    right: 20,
                    fontSize: 23,
                    cursor: "pointer",
                  }}
                ></i>
                <p style={{ fontSize: 22 }}>Your carts is empty</p>
                <img
                  src="./cart.gif"
                  alt=""
                  className="emptycart_img"
                  style={{ width: "5rem", padding: 10 }}
                />
              </div>
            )}
          </Menu>
        </Container>
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
      </Navbar>
    </div>
  );
};

export default Header2;
