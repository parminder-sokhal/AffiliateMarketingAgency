import React, { useState, useEffect, useRef } from "react";
import "../styles/Header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuRef = useRef(null);  // Ref to detect clicks outside the menu
  const hamburgerRef = useRef(null);  // Ref to detect clicks on the hamburger button

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && !hamburgerRef.current.contains(event.target)) {
        setIsMenuOpen(false); // Close the menu if clicked outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside); // Listen for mouse clicks
    return () => {
      document.removeEventListener("mousedown", handleClickOutside); // Cleanup listener on component unmount
    };
  }, []);

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
        <Link to="/">
          <img src="./images/linkprowhite.png" alt="Logo" />
        </Link>
      </div>

      <div 
        className="hamburger" 
        onClick={toggleMenu} 
        ref={hamburgerRef}  // Attach ref to the hamburger button
      >
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      <nav 
        className={`header__nav ${isMenuOpen ? "active" : ""}`} 
        ref={menuRef}  // Attach ref to the navigation menu
      >
        <div className="hamburger-close" onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about-us">About Us</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/blogs">Blog</Link>
          </li>
          <li className="header__contact">
            <Link to="/contact-us">Contact Us</Link>
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
          <Link to="/services">
            <button className="header__info-btn">Read More</button>
          </Link>
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
