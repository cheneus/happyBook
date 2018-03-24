import React from "react";
import { Link } from "react-router-dom";

const Nav = () => (
  <nav className="navbar navbar-inverse navbar-top">
    <div className="container-fluid">
      <div className="navbar-left">
        <Link to="/" className="navbar-brand">
          React Reading List
        </Link>
      </div>
      <div
        className="navbar-right"
        style={{ position: "relative", float: "right" }}
      >
        <Link to="/search" className="btn btn-primary navbar-btn">
          Google Books Lookup
        </Link>
      </div>
    </div>
  </nav>
);

export default Nav;
