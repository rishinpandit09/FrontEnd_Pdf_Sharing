import React, { useState } from "react";
import Header from "../header/header.componenet";
import axios from "axios";
export default function ForgetPassword() {
  const [username, setUsername] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = async (e) => {
    console.log("Submit clicked");
    e.preventDefault();

    // Perform validation
    if (password1 === "" || password2 === "") {
      setError("Please enter both username and password.");
      return;
    }
    if (password1 !== password2) {
      setError("Please enter both username and password.");
      return;
    }
    const response = await axios.post("/reset-password", {
      email: username,
      password1: password1,
    });

    if (!response.ok) {
      throw new Error("Login failed");
    }
    const data = await response.json();
    console.log(data);
    window.location.href = "/sign-in";
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
            <h3>Forgot Password?</h3>
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
              <label>Enter new Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                value={password2}
                onChange={(e) => setPassword1(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label>Conform Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                value={password2}
                onChange={(e) => setPassword2(e.target.value)}
              />
            </div>
            <div className="mb-3"></div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
