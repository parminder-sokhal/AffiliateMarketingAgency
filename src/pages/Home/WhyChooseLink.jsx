import React from "react";
import "../../styles/homepage/WhyChooseLink.scss";

const WhyChooseLink = () => {
  return (
    <div className="why-choose-link">
      <div className="image-container">
        <img src="./images/cuate.png" alt="Why Choose LinkPro" />
      </div>
      <div className="content">
        <h2>Why Choose LinkPro ?</h2>
        <p className="description">
          With LinkPro, you’re partnering with a team dedicated to your success.
        </p>
        <ul className="features">
          <li>
            Proven Expertise: Our experienced professionals bring in-depth
            knowledge of affiliate marketing and a proven track record of
            driving growth.
          </li>
          <li>
            Full-Service Approach: From program launch to ongoing management, we
            handle it all, so you don’t have to.
          </li>
          <li>
            Transparency & Integrity: We value open communication and ethical
            practices, ensuring you’re informed every step of the way.
          </li>
          <li>
            Cutting-Edge Tools: We leverage the latest tools and technologies to
            provide actionable insights and real-time data on your affiliate
            marketing performance.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WhyChooseLink;
