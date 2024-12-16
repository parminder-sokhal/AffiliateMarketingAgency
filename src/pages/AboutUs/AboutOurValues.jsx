import React from "react";
import "../../styles/AboutUs/AboutOurValues.scss";

const AboutOurValues = () => {
  return (
    <div className="about-our-values-container">
      <div className="left-div">
        <h2 className="values-heading">Our Values</h2>
        <p className="values-description">
          At the core of LinkPro are the values that guide everything we do:
        </p>

        <ul className="values-list">
          <li className="value-point">
            <span>Transparency: </span>
            We believe in honest, open communication. You’ll always know what’s
            happening with your program, fostering trust and collaboration.
          </li>
          <li className="value-point">
            <span>Integrity: </span>
            We maintain the highest ethical standards in managing your affiliate
            partnerships, ensuring a fair and transparent process for all
            parties involved.
          </li>
          <li className="value-point">
            <span>Long-Term Relationships: </span>
            Our focus is on building strong, enduring partnerships that grow
            alongside your business. We prioritize your goals and strive for
            mutual success.
          </li>
          <li className="value-point">
            <span>Innovation: </span>
            We are committed to staying ahead of industry trends and utilizing
            the latest technologies and strategies to deliver cutting-edge
            solutions for our clients.
          </li>
        </ul>
      </div>

      <div className="right-div">
        <img
          src="./images/bro1.png"
          alt="Our Values"
          className="values-image"
        />
      </div>
    </div>
  );
};

export default AboutOurValues;
