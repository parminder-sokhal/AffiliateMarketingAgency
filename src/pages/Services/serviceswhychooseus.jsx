import React from "react";
import "../../styles/services/serviceswhychooseus.scss";
import { FaCheck } from "react-icons/fa"; // Tick icon from react-icons

const ServicesWhyChooseUs = () => {
  return (
    <div className="why-choose-us-container">
      <div className="left-div">
        <h1 className="heading">Why choose us for your services?</h1>
        <p className="description">
          We make affiliate marketing simple and effective. Here’s why you
          should choose us:
        </p>
        <div className="benefits">
          <div className="benefit-item">
            <FaCheck className="tick-icon" />
            <p className="benefit-description">
              <span>Custom Solutions: </span>Custom Solutions: We tailor our
              strategies to fit your business and goals.
            </p>
          </div>
          <div className="benefit-item">
            <FaCheck className="tick-icon" />
            <p className="benefit-description">
              <span>Experienced Team:</span> Our expert team has helped
              businesses of all sizes succeed.
            </p>
          </div>
          <div className="benefit-item">
            <FaCheck className="tick-icon" />
            <p className="benefit-description">
              <span>Complete Management:</span> From setup to tracking results,
              we handle everything so you can focus on your business.
            </p>
          </div>
          <div className="benefit-item">
            <FaCheck className="tick-icon" />
            <p className="benefit-description">
              <span>Data-Driven Results:</span> We use data to continuously
              improve, delivering measurable success.
            </p>
          </div>
          <div className="benefit-item">
            <FaCheck className="tick-icon" />
            <p className="benefit-description">
              <span>Long-Term Partnerships:</span> We work with you for the long
              run, adapting as your business grows.
            </p>
          </div>
          <div className="benefit-item">
            <FaCheck className="tick-icon" />
            <p className="benefit-description">
              <span>Transparency & Trust:</span> We operate with honesty and
              integrity, giving you full insight into your program.
            </p>
          </div>
        </div>
      </div>

      <div className="right-div">
        <img
          src="./images/servicesbro.png"
          alt="Why choose us"
          className="image"
        />
      </div>
    </div>
  );
};

export default ServicesWhyChooseUs;
