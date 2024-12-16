import React from "react";
import "../styles/footer.scss";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        {/* Logo Section */}
        <div className="footer__logo">
          <img src="./images/logohere.jpg" alt="Logo" />
        </div>

        {/* Description Section */}
        <div className="footer__description">
          <p>
            LinkPro is your leading Affiliate Marketing Agency! LinkPro
            specializes in matching businesses with top-performing affiliates in
            order to accelerate growth, enhance income, and maximize
            online visibility.
          </p>
        </div>

        {/* Footer Links */}
        <div className="footer__links">
          <div className="footer__links-column">
            <h4>Quicklinks</h4>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/services">Services</a>
              </li>
              <li>
                <a href="/blog">Blog</a>
              </li>
            </ul>
          </div>

          <div className="footer__links-column">
            <h4>Services</h4>
            <ul>
              <li>
                <a href="/service1">Service 1</a>
              </li>
              <li>
                <a href="/service2">Service 2</a>
              </li>
              <li>
                <a href="/service3">Service 3</a>
              </li>
            </ul>
          </div>

          <div className="footer__links-column">
            <h4>Contact Us</h4>
            <ul>
              <li>
                <a href="/contact">Email</a>
              </li>
              <li>
                <a href="/contact">Phone</a>
              </li>
            </ul>
          </div>

          <div className="footer__subscribe">
            <h4>Subscribe Now</h4>
            <div className="footer__subscribe-form">
              <input
                type="email"
                placeholder="Enter your email"
                className="footer__subscribe-input"
              />
              <button type="submit" className="footer__subscribe-btn">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </footer>
      <div className="copyright">
        <p>© Copyright 2023 Linkpro.co.in. All Rights Reserved</p>
      </div>
    </>
  );
};

export default Footer;
