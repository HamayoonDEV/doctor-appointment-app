import React from "react";
import { Form, Input } from "antd";
import { useNavigate } from "react-router-dom";

import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  const finishHandler = (values) => {
    console.log(values);
  };
  return (
    <>
      <Form layout="vertical" onFinish={finishHandler} className="login-form ">
        <h3>Login</h3>

        <Form.Item label="Email" name="email">
          <Input type="email" required />
        </Form.Item>

        <Form.Item label="Password" name="password">
          <Input type="password" required />
        </Form.Item>
        <button className="login-btn">Login</button>
        <span>
          Don't have an account?
          <button className="login-btn2" onClick={() => navigate("/register")}>
            Register
          </button>
        </span>
      </Form>
    </>
  );
};

export default Login;
