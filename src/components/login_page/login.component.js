import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../header/header.componenet";
import axios from "axios";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = async (e) => {
    console.log("Submit clicked");
    e.preventDefault();

    // Perform validation
    if (username === "" || password === "") {
      setError("Please enter both username and password.");
      return;
    }

    // Perform validation
    if (username === "" || password === "") {
      setError("Please enter both username and password.");
      return;
    }
    try {
      const response = await axios.post("/login", {
        email: username,
        password: password,
      });
      if (!response.ok) {
        throw new Error("Login failed");
      }
      window.location.href = "/dashboard";
      const data = await response.json();
      localStorage.setItem("data", data);
      console.log(data);
      // Handle the response data, such as storing user information in state or redirecting to a new page
    } catch (error) {
      console.error(error);
      // Handle the error, such as displaying an error message to the user
    }
  };
  return (
    <div className="container">
      <div>
        <Header />
      </div>
      <div
        className="auth-wrapper"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <div className="auth-inner">
          <form onSubmit={handleSubmit}>
            {error && <div className="error">{error}</div>}
            <h3>Sign In</h3>
            <div className="mb-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-3"></div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
            <p className="forgot-password text-right">
              Forgot <Link to="/forget-password">password?</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Login;
