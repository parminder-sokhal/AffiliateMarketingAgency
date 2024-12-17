import React from "react";
import "../styles/Header.scss";

const Header = () => {
  return (
    <header className="header">
      {/* Logo on the left */}
      <div className="header__logo">
        <a href="/">
          <img a href="/" src="./images/linkprowhite.png" alt="Logo" />
        </a> 
      </div>

      {/* Navigation links in the center */}
      <nav className="header__nav">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/aboutus">About Us</a>
          </li>
          <li>
            <a href="/services">Services</a>
          </li>
          <li>
            <a href="/blogs">Blog</a>
          </li>
        </ul>
      </nav>

      {/* Contact Us button on the right */}
      <div className="header__contact">
        <button>Contact Us</button>
      </div>

      {/* Section below navigation links */}
      <div className="header__info">
        <div className="header__info-left">
          <h3>Affiliate Marketing Agency</h3>
          <h1>High-Performance Affiliate Marketing for Quick Value</h1>
          <h5>
            We lead affiliate and partner management for the world's most
            renowned brands.
          </h5>
          <button className="header__info-btn">Read More</button>
        </div>
        <div className="header__info-right">
          {/* <img 
           src="./images/Ellipse2.png"
          className="headeroverimg"
          /> */}
          <img
            className="header__circle-img"
            src="./images/malefemaleofficeworkers.png"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
