import React from "react";
import "../styles/footer.scss";
import { PiMapPinFill } from "react-icons/pi";
import { IoMail } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer__logo">
          <img src="./images/linkproblue.png" alt="Logo" />
        </div>

        <div className="footer__description">
          <p>
            LinkPro is your leading Affiliate Marketing Agency! LinkPro
            specializes in connecting companies with high-performing affiliates
            to boost revenue, increase online visibility, and speed up growth.
          </p>
        </div>

        <div className="footer__links">
          <div className="footer__links-column">
            <h4>Visit links</h4>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about-us">About Us</a>
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
                <a href="/privacy-policy">Privacy Policy</a>
              </li>
              <li>
                <a href="/Disclaimer">Disclaimer</a>
              </li>
              <li>
                <a href="/Term-Condition">T&C</a>
              </li>
            </ul>
          </div>

          <div className="footer__links-column">
            <h4>Contact Us</h4>
            <ul>
              <li><PiMapPinFill/>
                <a href="/contact-us">&nbsp;Phase 5 Sector 59,
                Sahibzada Ajit<br/>Singh Nagar, Punjab</a>
              </li>
              <li><IoMail />
                <a href="/contact-us">&nbsp; info@linkpro.com</a>
              </li>
              
              <li ><FaPhoneAlt />
                <a href="/contact-us">&nbsp; +91 8409120206</a>
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
        <p>© Copyright 2025 Linkpro.co.in. All Rights Reserved</p>
      </div>
    </>
  );
};

export default Footer;
