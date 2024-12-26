import React, { useState,useEffect } from "react";
import "../styles/HeaderDefault.scss"; // Import the styles

const HeaderDefault = () => {
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
    <header className="header-default">
      <div className="header-default__logo">
        <a href="/">
          <img src="./images/linkproblue.png" alt="Logo" />
        </a>
      </div>

      <div className="hamburger_default" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      <nav className={`header-default__nav ${isMenuOpen ? "active" : ""}`}>
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
