import React from "react";
import "../../styles/AboutUs/AboutUsWhatWeDo.scss";

const boxData = [
  {
    title: "Content Creation",
    description:
      "We develop engaging marketing materials that motivate affiliates and resonate with their audiences, helping to boost your brand’s visibility.",
    icon: "./images/charm_circle-tick.png",
  },
  {
    title: "Affiliate Recruitment",
    description:
      "We identify and recruit high-quality affiliates who align with your brand, leveraging our extensive network to connect you with the right partners.",
    icon: "./images/charm_circle-tick.png",
  },
  {
    title: "Performance Tracking",
    description:
      "Using advanced analytics, we monitor your program’s performance, allowing us to make data-driven adjustments that enhance results and maximize ROI.",
    icon: "./images/charm_circle-tick.png",
  },
  {
    title: "Content Creation",
    description:
      "We develop engaging marketing materials that motivate affiliates and resonate with their audiences, helping to boost your brand’s visibility.",
    icon: "./images/charm_circle-tick.png",
  },
  {
    title: "Ongoing Management",
    description:
      "Our team provides continuous support and optimization, ensuring your affiliate program remains competitive and effective over time.",
    icon: "./images/charm_circle-tick.png",
  },
];

const AboutUsWhatWeDo = () => {
  return (
    <div className="about-us-container">
      <div className="section-header">
        <p className="section-title">What We Do</p>
        <h2 className="section-subtitle">
          Driving Success Through Affiliate Marketing
        </h2>
      </div>

      <div className="boxes-container">
        {boxData.map((box, index) => (
          <div key={index} className="box">
            <img src={box.icon} alt={box.title} />
            <div className="content">
              <h3>{box.title}</h3>
              <p>{box.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUsWhatWeDo;
