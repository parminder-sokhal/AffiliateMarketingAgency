import React, { useState, useEffect, useRef } from "react";
import "../styles/Header.scss";

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
        <a href="/">
          <img src="./images/linkprowhite.png" alt="Logo" />
        </a>
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
