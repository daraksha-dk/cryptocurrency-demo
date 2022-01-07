import React from "react";
import "./Navbar.scss";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav-logo">
        <img src={logo} alt="logo" className="logo" />
      </div>

      <div className="nav-content">
        <a href="/home" className="navbarItem">
          Home
        </a>
        <a href="/about" className="navbarItem">
          About
        </a>
        <a href="/products" className="navbarItem">
          Products
        </a>

        <a href="/contact" className="navbarItem">
          Contact
        </a>
      </div>
    </div>
  );
};

export default Navbar;
