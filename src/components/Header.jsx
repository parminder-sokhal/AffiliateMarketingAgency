import React, { useState, useEffect, useRef } from "react";
import "../styles/Header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuRef = useRef(null); // Ref to detect clicks outside the menu
  const hamburgerRef = useRef(null); // Ref to detect clicks on the hamburger button
  const closeHamburgerRef = useRef(null); // Ref to detect clicks on the hamburger-close button

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !hamburgerRef.current.contains(event.target)
      ) {
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

  // Handle menu item click to close the menu
  const handleMenuItemClick = () => {
    setIsMenuOpen(false); // Close the menu when any item is clicked
  };

  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/">
          <img src="./images/linkprowhite.png" alt="Logo" />
        </Link>
      </div>

      <div
        className={`hamburger ${isMenuOpen ? "change" : ""}`}
        onClick={toggleMenu}
        ref={hamburgerRef}
      >
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>

      <nav
        className={`header__nav ${isMenuOpen ? "active" : ""}`}
        ref={menuRef} // Attach ref to the navigation menu
      >
        <div
          className={`hamburger-close ${isMenuOpen ? "change" : ""}`} // Apply the effect to hamburger-close
          onClick={toggleMenu}
          ref={closeHamburgerRef} // Attach ref to the hamburger-close button
        >
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
        <ul>
          <li>
            <Link to="/" onClick={handleMenuItemClick}>Home</Link>
          </li>
          <li>
            <Link to="/about-us" onClick={handleMenuItemClick}>About Us</Link>
          </li>
          <li>
            <Link to="/services" onClick={handleMenuItemClick}>Services</Link>
          </li>
          <li>
            <Link to="/blog" onClick={handleMenuItemClick}>Blog</Link>
          </li>
          <li className="header__contact">
            <Link to="/contact-us" onClick={handleMenuItemClick}>Contact Us</Link>
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
