import React, { useState, useEffect, useRef } from "react";
import "../styles/HeaderDefault.scss"; // Import the styles

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
        <a href="/">
          <img src="./images/linkproblue.png" alt="Logo" />
        </a>
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
          <li className="header-default__contact">
            <a href="/contactus">Contact Us</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderDefault;
