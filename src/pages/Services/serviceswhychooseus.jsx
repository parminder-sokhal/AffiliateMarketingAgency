import React from "react";
import "../../styles/services/serviceswhychooseus.scss";
import { GiCheckMark } from "react-icons/gi";
const benefitsData = [
  {
    title: "Custom Solutions",
    description: "We tailor our strategies to fit your business and goals.",
  },
  {
    title: "Experienced Team",
    description: "Our expert team has helped businesses of all sizes succeed.",
  },
  {
    title: "Complete Management",
    description:
      "From setup to tracking results, we handle everything so you can focus on your business.",
  },
  {
    title: "Data-Driven Results",
    description:
      "We use data to continuously improve, delivering measurable success.",
  },
  {
    title: "Long-Term Partnerships",
    description:
      "We work with you for the long run, adapting as your business grows.",
  },
  {
    title: "Transparency & Trust",
    description:
      "We operate with honesty and integrity, giving you full insight into your program.",
  },
];

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
          {benefitsData.map((benefit, index) => (
            <div className="benefit-item" key={index}>
              <GiCheckMark className="tick-icon" />
              <p className="benefit-description">
                <span>{benefit.title}: </span> {benefit.description}
              </p>
            </div>
          ))}
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
