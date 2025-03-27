import React, { useState, useEffect, useRef } from "react";
import "../styles/HeaderDefault.scss"; // Import the styles
import { Link } from "react-router-dom";

const HeaderDefault = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);
  const closeHamburgerRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !hamburgerRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
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

  const handleMenuItemClick = () => {
    setIsMenuOpen(false); // Close the menu when any item is clicked
  };

  return (
    <header className="header-default">
      <div className="header-default__logo">
        <Link to="/">
          <img src="./images/linkproblue.png" alt="Logo" />
        </Link>
      </div>

      <div
        className={`hamburger_default ${isMenuOpen ? "change" : ""}`} // Add 'change' class when menu is open
        onClick={toggleMenu}
        ref={hamburgerRef} // Attach ref to the hamburger button
      >
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>

      <nav
        className={`header-default__nav ${isMenuOpen ? "active" : ""}`}
        ref={menuRef}
      >
        <div
          className={`hamburger_default-close ${isMenuOpen ? "change" : ""}`}
          onClick={toggleMenu}
          ref={closeHamburgerRef}
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
          <li className="header-default__contact">
            <Link to="/contact-us" onClick={handleMenuItemClick}>Contact Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderDefault;
