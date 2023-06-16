import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./components/login_page/login.component";
import SignUp from "./components/sign_up_page/signup.component";
import DashBoard from "./components/mainPage/dashboard.component";
import ForgetPassword from "./components/forget_password/forgetpassword.component";
import ProfilePage from "./components/profile/profile_page";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
