import React from 'react';
import '../styles/HeaderDefault.scss';  // Import the styles

const HeaderDefault = () => {
  return (
    <header className="header-default">
      {/* Logo on the left */}
      <div className="header-default__logo">
        <img src="./images/logo_transparent.png" alt="Logo" />
      </div>
      {/* Navigation links in the center */}
      <nav className="header-default__nav">
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
      <div className="header-default__contact">
        <button>Contact Us</button>
      </div>
    </header>
  );
};

export default HeaderDefault;
