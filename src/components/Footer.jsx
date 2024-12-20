import React from "react";
import "../styles/footer.scss";

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
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/aboutus">About Us</a>
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
            <h4>Quick links</h4>
            <ul>
              <li>
                <a href="/privacypolicy">Privacy Policy</a>
              </li>
              <li>
                <a href="/Disclaimer">Disclaimer</a>
              </li>
              <li>
                <a href="/TermCondition">T&C</a>
              </li>
            </ul>
          </div>

          <div className="footer__links-column">
            <h4>Contact Us</h4>
            <ul>
              <li>
                <a href="/contactus">Email</a>
              </li>
              <li>
                <a href="/contactus">Phone</a>
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
