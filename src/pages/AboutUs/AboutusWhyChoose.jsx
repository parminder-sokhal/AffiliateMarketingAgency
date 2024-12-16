import React from "react";
import "../../styles/AboutUs/AboutusWhyChoose.scss"; // Import the SCSS file for styling

const AboutusWhyChoose = () => {
  return (
    <div className="aboutus-why-choose">
      <div className="aboutus-why-choose__left">
        <div className="aboutus-why-choose__box">
          <img src="./images/mdi_head-idea.png" alt="Creative Ideas" />
          <p>Creative Ideas</p>
        </div>
        <div className="aboutus-why-choose__box">
          <img src="./images/fluentpeopleteam.png" alt="Export Team" />
          <p>Export Team</p>
        </div>
        <div className="aboutus-why-choose__box">
          <img src="./images/basil_diamond-solid.png" alt="High Quality" />
          <p>High Quality</p>
        </div>
        <div className="aboutus-why-choose__box">
          <img src="./images/fluent_person-support.png" alt="24/7 Support" />
          <p>24/7 Support</p>
        </div>
      </div>

      <div className="aboutus-why-choose__right">
        <h3 className="aboutus-why-choose__subheading">Why Choose LinkPro?</h3>
        <h2 className="aboutus-why-choose__heading">
          Specialist In Affiliate Marketing Services
        </h2>
        <p className="aboutus-why-choose__description">
          We are dedicated to helping businesses excel in the digital world.
        </p>
        <span>First Working Process</span>
        <p>
          Our team of professionals works closely with you to gather valuable
          insights and align our strategies with your vision.
        </p>
        <span>Dedicate Team</span>
        <p>
          Every team member is carefully selected for their creativity and
          unwavering commitment to delivering exceptional results for our
          clients.
        </p>
        <span>24/7 Hours Support</span>
        <p>
          We are 24x7 to guide you every step of the way on your digital
          journey.
        </p>
      </div>
    </div>
  );
};

export default AboutusWhyChoose;
