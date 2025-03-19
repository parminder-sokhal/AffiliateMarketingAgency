import React from "react";
import "../styles/footer.scss";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <>
      <footer className="footer">
        {/* Logo Section */}
        <div className="footer__logo">
          <img src="./images/linkproblue.png" alt="Logo" />
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
            <h4>Visit links</h4>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/aboutus">About Us</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/blog">Blog</ Link>
              </li>
            </ul>
          </div>

          <div className="footer__links-column">
            <h4>Quick links</h4>
            <ul>
              <li>
                <Link to="/privacypolicy">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/Disclaimer">Disclaimer</Link>
              </li>
              <li>
                <Link to="/TermCondition">T&C</Link>
              </li>
            </ul>
          </div>

          <div className="footer__links-column">
            <h4>Contact Us</h4>
            <ul>
              <li>
                <Link to="/contactus">Email</Link>
              </li>
              <li>
                <Link to="/contactus">Phone</Link>
              </li>
            </ul>
          </div>

          <div className="footer__subscribe">
            <h4>Subscribe Now</h4>
            <div className="footer__subscribe-form">
              <input type="email" className="footer__subscribe-input" />
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
