import React, { Component, useState } from "react";
import Header from "../header/header.componenet";
import axios from "axios";
function SignUp() {
  const [firstName, setFirstName] = useState(" ");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = async (e) => {
    console.log("Submit clicked");
    e.preventDefault();

    // Perform validation
    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      password1 === "" ||
      password2
    ) {
      setError("Please enter all the fields.");
      return;
    }
    try {
      const response = await axios.post("/sign-in", {
        fullname: firstName + " " + lastName,
        email: email,
        password1: password1,
        password2: password2,
      });
      if (!response.ok) {
        throw new Error("Login failed");
      }
      window.location.href = "/sign-in";
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
    <div>
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
            <h3>Sign Up</h3>
            <div className="mb-3">
              <label>First name</label>
              <input
                type="text"
                className="form-control"
                placeholder="First name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label>Last name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Last name"
                value={lastName}
                onChange={(e) => setlastName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                value={password1}
                onChange={(e) => setPassword1(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label>Confirm Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                value={password2}
                onChange={(e) => setPassword2(e.target.value)}
              />
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Sign Up
              </button>
            </div>
            <p className="forgot-password text-right">
              Already registered <a href="/sign-in">sign in?</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
