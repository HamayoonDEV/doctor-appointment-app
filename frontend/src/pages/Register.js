import React from "react";
import { Form, Input } from "antd";
import { useNavigate } from "react-router-dom";

import "./Register.css";

const Register = () => {
  const navigate = useNavigate();
  const finishHandler = (values) => {
    console.log(values);
  };
  return (
    <>
      <Form
        layout="vertical"
        onFinish={finishHandler}
        className="register-form card"
      >
        <h3>Register</h3>
        <Form.Item label="Name" name="name">
          <Input type="text" required />
        </Form.Item>

        <Form.Item label="Email" name="email">
          <Input type="email" required />
        </Form.Item>

        <Form.Item label="Password" name="password">
          <Input type="password" required />
        </Form.Item>
        <button className="register-btn">Register</button>
        <span>
          Already Registerd?
          <button className="register-btn2" onClick={() => navigate("/login")}>
            Login
          </button>
        </span>
      </Form>
    </>
  );
};

export default Register;
