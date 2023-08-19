import React from "react";
import { LoginApi, RegisterApi, GoogleSignInAPI } from "../api/AuthAPI";
import "../Sass/LoginComponent.scss";
import { useState } from "react";
import logo from "../assets/logo.png";
import GoogleButton from "react-google-button";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


function LoginComponent() {
  let navigate = useNavigate();

  const [credentails, setCredentials] = useState({});
  const login = async () => {
    try {
      let res = await LoginApi(credentails.email, credentails.password);
      toast.success("Welcome to SocialNet!");
      localStorage.setItem("userEmail",res.user.email);
      navigate("/home");

    } 
    catch (error) {
      console.log(error);
      toast.error("Please Check your Credentials");
    }
  };

  const googlesignin = () => {
    try {
      let response = GoogleSignInAPI();
      console.log(response);
    }
     catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="login-wrapper">
        <div>
          {" "}
          <img src={logo} className="Logo imglo" />
        </div>
        <br />

        <div className="login-wrapper-inner">
          <h1 className="heading">Sign in</h1>
          <p className="sub-heading">Stay updated to the world</p>

          <div className="auth-inputs">
            <input
              onChange={(event) =>
                setCredentials({ ...credentails, email: event.target.value })
              }
              type="email"
              className="common-input"
              placeholder="Email or Phone"
            />
            <input
              onChange={(event) =>
                setCredentials({ ...credentails, password: event.target.value })
              }
              type="password"
              className="common-input"
              placeholder="Password"
            />
          </div>
          <button onClick={login} className="login-btn">
            Sign in
          </button>
          <br />
          <div>
            <GoogleButton className="extra" onClick={googlesignin} />
          </div>
        </div>
        <hr className="hr-text" data-content="or" />

        <div className="google-btn-container">
          <p className="go-to-signup">
            New to SocialNet?{" "}
            <span className="join-now" onClick={() => navigate("/register")}>
              Join SocialNet
            </span>
          </p>
        </div>
      </div>
    </>
  );
}

export default LoginComponent;
