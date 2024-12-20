import React from 'react';
import '../styles/HeaderDefault.scss';  // Import the styles

const HeaderDefault = () => {
  return (
    <header className="header-default">
      <div className="header-default__logo">
        <a href='/'>
        <img src="./images/linkproblue.png" alt="Logo" />
        </a>
      </div>
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
      <a href="/contactus"> <button>Contact Us</button></a>
      </div>
    </header>
  );
};

export default HeaderDefault;
