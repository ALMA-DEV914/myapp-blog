import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className="alert alert-danger" role="alert">
        <h4 className="alert-heading">
          Sending overseas?{" "}
          <a classname="link-url" href="https://remit.ly/gfe602">
            REMITLY
          </a>
        </h4>
        <p>
          Send money online for what matters most We make international money
          transfers easier than ever. Choose how and when you send, with great
          exchange rates and low fees.
        </p>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            HEALTH&WELLNESS
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
            <div className="buttons">
              <NavLink to="/login" className="btn btn-outline-dark">
                <i className="fa fa-sign-in"> Login</i>
              </NavLink>
              <NavLink to="/signup" className="btn btn-outline-dark ms-2">
                <i className="fa fa-user-plus me-1"> Signup</i>
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
