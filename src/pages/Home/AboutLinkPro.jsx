import React from "react";
import "../../styles/homepage/AboutLinkPro.scss"; // Import the SCSS file for styling

const AboutLinkPro = () => {
  return (
    <div className="about-link-pro">
      <div className="left-side">
        <h3>About LinkPro </h3>
        <h2>Unlock the Power of Affiliate Marketing</h2>
        <h5>
          Affiliate marketing is one of the most effective ways to grow your
          business, and at LinkPro, we make it simple. Our comprehensive
          approach ensures that every aspect of your affiliate program is
          expertly managed — from strategy development and affiliate recruitment
          to performance tracking and ongoing optimization. We handle the
          complexities, so you can focus on running your business.
        </h5>
        <a href="/aboutus">
          <button className="know-more-btn">Know More</button>
        </a>
      </div>

      <div className="right-side">
        <img src="./images/bro.png" alt="About Us" />
      </div>
    </div>
  );
};

export default AboutLinkPro;
