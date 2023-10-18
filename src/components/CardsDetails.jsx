import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import "./style.css";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ADD_CART, RMV_CART, REM_IND } from "../redux/CartSlice";

const CardsDetails = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const getdata = useSelector((state) => state.cart.cart);

  const compare = () => {
    let compareData = getdata.filter((e) => {
      return e.id == id;
    });
    setData(compareData);
  };

  const delee = (id) => {
    dispatch(RMV_CART(id));
  };

  const send = (id) => {
    let d = getdata.filter((ele) => ele.id == id);
    dispatch(ADD_CART(...d));
    compare();
  };
  const del_ind = (id) => {
    let d = getdata.filter((ele) => ele.id == id);
    if (d[0].qnty == 0) {
      dispatch(RMV_CART(id));
      navigate("/");
    } else {
      dispatch(REM_IND(...d));
      compare();
    }
  };

  useEffect(() => {
    compare();
  }, [id]);

  return (
    <div>
      <div className="container mt-2">
        <h2 className="text-center">Items Details Page</h2>
        <section className="container mt-2">
          <div className="iteamsdetails d-flex">
            {data.map((ele) => {
              return (
                <>
                  <div className="items_img">
                    <img src={ele.imgdata} alt="pr_img" />
                  </div>
                  <div className="details">
                    <Table>
                      <tr>
                        <td>
                          <p>
                            <strong>Restaurant</strong> : {ele.rname}
                          </p>
                          <p>
                            <strong>Price</strong> : Rs. {ele.price}
                          </p>
                          <p>
                            <strong>Dishes</strong> : {ele.address}
                          </p>
                          <p>
                            <strong>Total</strong> :Rs {ele.price * ele.qnty}
                          </p>
                          <div
                            className="mt-5 d-flex justify-content-between align-items-center"
                            style={{
                              width: "100",
                              cursor: "pointer",
                              background: "#ddd",
                              color: "#111",
                            }}
                          >
                            <span
                              style={{ fontSize: 24 }}
                              onClick={() => {
                                del_ind(id);
                              }}
                            >
                              -
                            </span>
                            <span style={{ fontSize: 22 }}>{ele.qnty}</span>
                            <span
                              style={{ fontSize: 24 }}
                              onClick={() => {
                                send(id);
                              }}
                            >
                              +
                            </span>
                          </div>
                        </td>
                        <td>
                          <p>
                            <strong>Rating : </strong>
                            <span
                              style={{
                                background: "green",
                                color: "#fff",
                                padding: "2px 5px",
                                borderRadius: "5px",
                              }}
                            >
                              {ele.rating} ⭐
                            </span>
                          </p>
                          <p>
                            <strong>Order review : </strong>
                            {ele.somedata}
                          </p>
                          <p>
                            <strong>Remove : </strong>{" "}
                            <i
                              style={{
                                fontSize: "20px",
                                color: "red",
                                cursor: "pointer",
                              }}
                              className="fa-solid fa-trash"
                              onClick={() => {
                                delee(id);
                                navigate("/");
                              }}
                            ></i>
                          </p>
                        </td>
                      </tr>
                    </Table>
                  </div>
                </>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default CardsDetails;
