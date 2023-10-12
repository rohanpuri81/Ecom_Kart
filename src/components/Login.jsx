import React, { useState } from "react";
import Sign_img from "./Animations/Sign_img";
import { Form, Button } from "react-bootstrap";

const Login = () => {
  const [inpVal, setInpVal] = useState({
    name: "",
    email: "",
    date: "",
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
    const { name, email, password, date } = inpVal;

    if (name === "" || email === "" || date === "") {
      alert("Please fill all the details");
    } else if (!email.includes("@") || !email.includes(".")) {
      alert("Please Enter Valid Email");
    } else if (password.length < 6) {
      alert("Password length Should be greater than 6");
    } else {
      console.log("jj");
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
