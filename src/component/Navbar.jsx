import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div class="alert alert-success alert-dismissible">
        <button type="button" class="close" data-dismiss="alert">
          &times;
        </button>
        <strong>
          {" "}
          Sending overseas?{" "}
          <a classname="link-url" href="https://remit.ly/gfe602">
            REMITLY
          </a>
        </strong>{" "}
        Send money online for what matters most We make international money
        transfers easier than ever. Choose how and when you send, with great
        exchange rates and low fees.
      </div>
      <nav class="navbar  navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
        <div className="container">
          <div>
          <NavLink className="navbar-brand" to="/">
            HEALTH&WELLNESS
          </NavLink>
          </div>
         
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavbar"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="collapsibleNavbar">
            <div className="navbar-list">
            <ul class="navbar-nav">
              <li class="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink className="nav-link" to="/products">
                  Products
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
            </ul>
            </div>
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
