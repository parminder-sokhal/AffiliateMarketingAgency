import React from "react";
import "../../styles/homepage/WhatWeOffer.scss";

const offerData = [
  {
    title: "Full Program Management",
    description:
      "From strategy development to ongoing management, we cover every aspect of your affiliate program for seamless execution.",
  },
  {
    title: "Partner Recruitment",
    description:
      "We utilize advanced analytics to ensure your program is performing at its best, maximizing results and ROI.",
  },
  {
    title: "Partner Optimization",
    description:
      "Our content creation services are designed to engage affiliates and drive audience engagement, boosting conversions.",
  },
  {
    title: "Program Design",
    description:
      "We provide expert support throughout the entire process, ensuring your affiliate marketing program continues to evolve and thrive.",
  },
  {
    title: "Data Analysis",
    description:
      "You’ll receive in-depth performance reports to stay informed about your program’s progress and its impact on your business goals.",
  },
  {
    title: "Compliance & Fraud Prevention",
    description:
      "We identify and recruit affiliates who best align with your brand, helping you expand into new markets and demographics.",
  },
];

const WhatWeOffer = () => {
  return (
    <section className="what-we-offer">
      <div className="heading">
        <h2>What We Offer</h2>
        <p>
          We give complete affiliate marketing solutions that are customized to
          meet your company's requirements.
        </p>
      </div>

      <div className="boxes">
        {offerData.map((offer, index) => (
          <div className="box" key={index}>
            <span>{offer.title}</span>
            <p>{offer.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatWeOffer;
