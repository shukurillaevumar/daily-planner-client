import "../../assets/styles/auth.css";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    if (event.target.name === "username") {
      setUserName(event.target.value);
    } else if (event.target.name === "password") {
      setPassword(event.target.value);
    }
  };

  const sendRequest = (url, method = "POST", data) => {
    const baseUrl = "https://daily-planner-1dz0.onrender.com/";
    fetch(baseUrl + url, {
      method: method,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        if (data.status && data.authToken) {
          localStorage.setItem("authToken", data.authToken);
          return navigate("/");
        }
      });
  };

  const handleClick = (e) => {
    e.preventDefault();
    const authData = {
      userName: userName,
      password: password,
    };
    sendRequest("auth/login", "POST", authData);
  };
  return (
    <div className="app-register-page">
      <h2>Login</h2>
      <form>
        <div className="form-field">
          <label htmlFor="username">Username</label>
          <input
            onChange={handleInputChange}
            type="text"
            id="username"
            name="username"
          />
        </div>
        <div className="form-field">
          <label htmlFor="password">Password</label>
          <input
            onChange={handleInputChange}
            type="password"
            id="password"
            name="password"
          />
        </div>
        <button type="submit" onClick={handleClick}>
          Login
        </button>
      </form>
      <p>
        If you do not have an account, <Link to="/auth/register">Register</Link>
        here
      </p>
    </div>
  );
}

export default Login;
