import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import Login_img from "./Animations/Login_img";
import { setBtnShow } from "../redux/LogOut_Slice";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const history = useNavigate();
  const dispatch = useDispatch();
  const [inpVal, setInpVal] = useState({
    name: "",
    email: "",
    date: "",
    password: "",
  });
  useEffect(() => {
    let login_Check = localStorage.hasOwnProperty("user_login");
    if (login_Check) {
      let log_details = localStorage.getItem("user_login");
      log_details = JSON.parse(log_details);
      if (log_details.length !== 0) {
        dispatch(setBtnShow(true));
        history("/details");
      }
    }
  }, []);
  const getData = (e) => {
    const { value, name } = e.target;

    setInpVal(() => {
      return {
        ...inpVal,
        [name]: value,
      };
    });
  };
  const addData = (e) => {
    e.preventDefault();
    const { name, email, password, date } = inpVal;

    if (name === "" || email === "" || date === "") {
      alert("Please fill all the details");
    } else if (!email.includes("@") || !email.includes(".")) {
      alert("Please Enter Valid Email");
    } else if (password.length < 6) {
      alert("Password length Should be greater than 6");
    } else {
      let check = localStorage.hasOwnProperty("useryoutube");
      if (check) {
        let newData;
        let strData = localStorage.getItem("useryoutube");
        strData = JSON.parse(strData);
        if (Array.isArray(strData)) {
          newData = [...strData, inpVal];
        } else {
          newData = [strData, inpVal];
        }
        localStorage.setItem("useryoutube", JSON.stringify(newData));
      } else {
        localStorage.setItem("useryoutube", JSON.stringify(inpVal));
      }
      setInpVal({
        name: "",
        email: "",
        date: "",
        password: "",
      });
    }
  };
  return (
    <>
      <div className="container mt-3">
        <section className="d-flex justify-content-center">
          <section className="left_data mt-3 " style={{ width: "100%" }}>
            <Form className="d-flex flex-column justify-content-center align-items-center mt-5">
              <h3 className="text-center col-lg-6">Sign Up</h3>
              <Form.Group className="mb-3 col-lg-6">
                <Form.Control
                  type="text"
                  name="name"
                  value={inpVal.name}
                  onChange={getData}
                  placeholder="Enter Your Name"
                />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6">
                <Form.Control
                  type="email"
                  name="email"
                  value={inpVal.email}
                  onChange={getData}
                  placeholder="Enter your email"
                />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6">
                <Form.Control
                  type="Date"
                  value={inpVal.date}
                  name="date"
                  onChange={getData}
                />
              </Form.Group>

              <Form.Group
                className="mb-3 col-lg-6"
                controlId="formBasicPassword"
              >
                <Form.Control
                  type="password"
                  value={inpVal.password}
                  onChange={getData}
                  name="password"
                  placeholder="Password"
                />
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                className="mb-3 col-lg-6"
                style={{ backgroundColor: "#23CFBB", border: "none" }}
                onClick={addData}
              >
                Submit
              </Button>
              <p>
                Already Have an Account? <Link to={"/login"}>Signin</Link>
              </p>
            </Form>
          </section>
          <section className="right_data">
            <div className="sign_img mt-5">
              <Login_img />
            </div>
          </section>
        </section>
      </div>
    </>
  );
};

export default Home;
