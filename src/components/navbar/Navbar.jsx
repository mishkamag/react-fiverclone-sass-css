import React from "react";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <span className="text">fiver</span>
          <span className="dot">.</span>
        </div>
        <div className="links">
          <ul>
            <li>Fiverr Business</li>
            <li>Explore</li>
            <li>English</li>
            <li>Sign In</li>
            <li>Become a Seller</li>
            <button>Join</button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
