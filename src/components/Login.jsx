import React, { useEffect, useState } from "react";
import Sign_img from "./Animations/Sign_img";
import { Form, Button } from "react-bootstrap";
import { json, useNavigate } from "react-router-dom";
import { setBtnShow } from "../STORE/SLICES/LogOut_Slice";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const history = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    let login_Check = localStorage.hasOwnProperty("user_login");
    if (login_Check) {
      let log_details = localStorage.getItem("user_login");
      log_details = JSON.parse(log_details);
      if (log_details.length !== 0) {
        history("/details");
      }
    }
  }, []);

  const [inpVal, setInpVal] = useState({
    email: "",
    password: "",
  });
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
    const { email, password } = inpVal;

    const getUserArr = localStorage.getItem("useryoutube");

    if (email === "") {
      alert("Please fill all the details");
    } else if (!email.includes("@") || !email.includes(".")) {
      alert("Please Enter Valid Email");
    } else if (password.length < 6) {
      alert("Password length Should be greater than 6");
    } else {
      if (getUserArr && getUserArr.length) {
        const userData = JSON.parse(getUserArr);
        const userLogin = userData.filter((ele, ind) => {
          return ele.email === inpVal.email && ele.password === inpVal.password;
        });
        if (userLogin.length === 0) {
          alert("Invalid User Details..");
        } else {
          console.log("userLoggedInSuccessfully");
          localStorage.setItem("user_login", JSON.stringify(userLogin));
          dispatch(setBtnShow(true));
          history("/details");
        }
      }

      setInpVal({
        email: "",
        password: "",
      });
    }
  };
  return (
    <>
      <div className="container mt-3">
        <section className="d-flex justify-content-center">
          <section className="left_data mt-3" style={{ width: "100%" }}>
            <Form className="d-flex flex-column justify-content-center align-items-center mt-5">
              <h3 className="text-center col-lg-6">Sign In</h3>

              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  name="email"
                  value={inpVal.email}
                  onChange={getData}
                  placeholder="Enter your email"
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
                Login
              </Button>
            </Form>
          </section>
          <section className="right_data">
            <div className="sign_img mt-5">
              <Sign_img />
            </div>
          </section>
        </section>
      </div>
    </>
  );
};

export default Login;
