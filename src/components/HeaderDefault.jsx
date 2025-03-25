import React, { useState, useEffect, useRef } from "react";
import "../styles/HeaderDefault.scss"; // Import the styles
import { Link } from "react-router-dom";

const HeaderDefault = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Refs for detecting clicks outside the menu and hamburger button
  const menuRef = useRef(null);  // Ref for the menu (nav)
  const hamburgerRef = useRef(null);  // Ref for the hamburger button

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&  // If clicked outside the menu
        !hamburgerRef.current.contains(event.target)  // And not clicked on the hamburger button
      ) {
        setIsMenuOpen(false);  // Close the menu
      }
    };

    document.addEventListener("mousedown", handleClickOutside);  // Listen for mouse clicks
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);  // Cleanup on unmount
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
    <header className="header-default">
      <div className="header-default__logo">
        <Link to="/">
          <img src="./images/linkproblue.png" alt="Logo" />
        </Link>
      </div>

      <div
        className="hamburger_default"
        onClick={toggleMenu}
        ref={hamburgerRef} // Attach ref to the hamburger button
      >
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      <nav
        className={`header-default__nav ${isMenuOpen ? "active" : ""}`}
        ref={menuRef} // Attach ref to the navigation menu
      >
        <div className="hamburger_default-close" onClick={toggleMenu}>
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
            <Link to="/blog">Blog</Link>
          </li>
          <li className="header-default__contact">
            <Link to="/contact-us">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderDefault;
