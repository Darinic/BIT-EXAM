import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

export default (props) => {
  const navigate = useNavigate();

  const onLogout = () => {
    axios
      .get("/api/users/logout")
      .then(() => {
        props.handleLoginState(false);
        navigate("/");
      })
      .catch((e) => {
        console.log("Server is offline");
      });
  };

  return (
    <div className="header">
      <div className="ui menu">
        <div>
        <Link className="item" to="/">
          <img style={{width:"50px", height:"50px"}}
            src="https://thumbs.dreamstime.com/b/vector-logo-freelancing-remote-work-179624843.jpg"
            alt="goFundMe logo"
          />
           Homepage
        </Link>
        </div>
        <Link className="item" to="/freelancers">
          Find a Freelancer
        </Link>
        <div className="right menu">
          {props.loggedIn === false && (
            <Link className="item" to="/registration">
              Sign up
            </Link>
          )}
          {props.loggedIn === false && (
            <Link className="item" to="/login">
              Log-In
            </Link>
          )}
          {props.loggedIn === true && props.userRole === 0 && (
            <Link className="item" to="/myFreelance">
              Your Freelance offers
            </Link>
          )}
          {props.loggedIn === true && props.userRole === 0 && (
            <Link className="item" to="/createFreelance">
              <strong>Create a Freelance offer</strong>
            </Link>
          )}

          {props.userRole === 1 && (
            <Link className="item" to="/admin">
              Admin panel
            </Link>
          )}
          {props.loggedIn === true && (
            <button
              onClick={onLogout}
              style={{ border: "none" }}
              className="item"
              to="/"
            >
              Logout
            </button>
          )}
          {props.email && <div className="item">User: {props.email}</div>}
        </div>
      </div>
    </div>
  );
};
