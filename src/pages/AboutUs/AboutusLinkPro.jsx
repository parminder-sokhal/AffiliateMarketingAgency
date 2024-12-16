import React from "react";
import "../../styles/AboutUs/AboutusLinkPro.scss"; // Import the SCSS file for styling

const AboutusLinkPro = () => {
  return (
    <div className="aboutus-link-pro__content">
      <div className="aboutus-link-pro__left">
        <h2 className="aboutus-link-pro__heading">
          LinkPro: Your Trusted Affiliate Marketing Partner
        </h2>
        <p className="aboutus-link-pro__description">
          LinkPro, specialize in helping businesses unlock the potential of
          affiliate marketing to drive growth and increase sales. As a
          full-service affiliate marketing agency, we work closely with clients
          to create, manage, and optimize custom affiliate programs that deliver
          measurable results. Whether you’re a small startup looking to build
          your first affiliate network or an established brand aiming to scale,
          we have the expertise and tools to help you succeed.
        </p>
        <p className="aboutus-link-pro__description">
          Our experienced team, combined with a data-driven approach, ensures
          that your campaigns not only run smoothly but also achieve sustainable
          growth over time.
        </p>
        <p className="aboutus-link-pro__description">
          With a commitment to transparency, integrity, and long-term
          partnerships, LinkPro is dedicated to being a trusted partner in your
          success.
        </p>
      </div>

      <div className="aboutus-link-pro__right">
        <img
          src="./images/aboutushand.png"
          alt="About Us"
          className="aboutus-link-pro__image"
        />
      </div>
    </div>
  );
};

export default AboutusLinkPro;
