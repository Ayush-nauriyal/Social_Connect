import React, { useState } from "react";
import { RegisterApi } from "../api/AuthAPI";
 import { postUserData } from "../api/FireStoreApi";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
 import { getUniqueId } from "../helpers/getuniqueid";
import "../Sass/LoginComponent.scss";
import { toast } from "react-toastify";

export default function RegisterComponent() {
  let navigate = useNavigate();
  const [credentails, setCredentials] = useState({});
  const register = async () => {
    try {
      let res = await RegisterApi(credentails.email, credentails.password);
      toast.success("Account Created!");
      postUserData(credentails)
      navigate("/home");
      localStorage.setItem("userEmail", res.user.email);
    } catch (err) {
      console.log(err);
      toast.error("Cannot Create your Account");
    }
  };

  return (
    <div className="login-wrapper">
          <img src={logo} className="Logo imglo" />

      <div className="login-wrapper-inner">
        <h1 className="heading">Make the most of your life</h1>

        <div className="auth-inputs">
          <input
            onChange={(event) =>
              setCredentials({ ...credentails, name: event.target.value })
            }
            type="text"
            className="common-input"
            placeholder="Your Name"
          />
          <input
            onChange={(event) =>
              setCredentials({ ...credentails, email: event.target.value })
            }
            type="email"
            className="common-input"
            placeholder="Email or phone number"
          />
          <input
            onChange={(event) =>
              setCredentials({ ...credentails, password: event.target.value })
            }
            type="password"
            className="common-input"
            placeholder="Password (6 or more characters)"
          />
        </div>
        <button onClick={register} className="login-btn">
          Agree & Join
        </button>
      </div>
      <hr className="hr-text" data-content="or" />
      <div className="google-btn-container">
        <p className="go-to-signup">
          Already on LinkedIn?{" "}
          <span className="join-now" onClick={() => navigate("/home")}>
            Sign in
          </span>
        </p>
      </div>
    </div>
  );
}