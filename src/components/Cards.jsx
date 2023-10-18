import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import "./style.css";
import { setBtnShow } from "../redux/LogOut_Slice";
import { ADD_CART } from "../redux/CartSlice";
import { useSelector, useDispatch } from "react-redux";
import Cardsdata from "./CardsData";
import { useNavigate } from "react-router-dom";

const Cards = () => {
  const history = useNavigate();
  const [showDetails, setShowDetails] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    let login_Check = localStorage.hasOwnProperty("user_login");
    if (login_Check) {
      let log_details = localStorage.getItem("user_login");
      log_details = JSON.parse(log_details);
      if (log_details.length === 0) {
        setShowDetails(false);
        history("/error");
      } else if (log_details.length !== 0) {
        dispatch(setBtnShow(true));
      }
    } else if (login_Check === false) {
      setShowDetails(false);
      history("/error");
    }
  }, []);
  const d = useSelector((state) => state.cart.cart);
  const send = (ele) => {
    dispatch(ADD_CART(ele));
  };
  const [data, setData] = useState(Cardsdata);
  return (
    <>
      {showDetails ? (
        <div className="container mt-3">
          <h2 className="text-center">Products</h2>

          <div className="row d-flex justify-content-center align-items-center">
            {data.map((ele, ind) => {
              return (
                <Card
                  key={ind}
                  style={{ width: "22rem", border: "none" }}
                  className="mx-2 mt-4 card_style"
                >
                  <Card.Img
                    className="mt-3"
                    variant="top"
                    src={ele.imgdata}
                    style={{
                      height: "16rem",
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                  />
                  <Card.Body>
                    <Card.Title>{ele.rname}</Card.Title>
                    <Card.Text>Rs. {ele.price}</Card.Text>
                    <div className="button_div">
                      <Button
                        variant="primary"
                        className="col-lg-12"
                        onClick={() => {
                          send(ele);
                        }}
                      >
                        Add to cart
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              );
            })}
          </div>
        </div>
      ) : (
        <div>Error</div>
      )}
    </>
  );
};

export default Cards;
