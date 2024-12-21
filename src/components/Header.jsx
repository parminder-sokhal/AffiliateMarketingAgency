import React, { useState, useEffect } from "react";
import "../styles/Header.scss";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isMenuOpen]);

  return (
    <header className="header">
      <div className="header__logo">
        <a href="/">
          <img src="./images/linkprowhite.png" alt="Logo" />
        </a>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      <nav className={`header__nav ${isMenuOpen ? "active" : ""}`}>
        <div className="hamburger-close" onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
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
          <li className="header__contact">
            <a href="/contactus">Contact Us</a>
          </li>
        </ul>
      </nav>

      <div className="header__info">
        <div className="header__info-left">
          <h3>Affiliate Marketing Agency</h3>
          <h1>High-Performance Affiliate Marketing for Quick Value</h1>
          <h5>
            We lead affiliate and partner management for the world's most
            renowned brands.
          </h5>
          <a href="/services">
            <button className="header__info-btn">Read More</button>
          </a>
        </div>
        <div className="header__info-right">
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
