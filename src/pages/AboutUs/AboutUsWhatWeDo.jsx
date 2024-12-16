import React from "react";
import "../../styles/AboutUs/AboutUsWhatWeDo.scss";

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
        <div className="row">
          <div className="box">
            <img src="./images/charm_circle-tick.png" />
            <div className="content">
              <h3>Content Creation</h3>
              <p>
                We develop engaging marketing materials that motivate affiliates
                and resonate with their audiences, helping to boost your brand’s
                visibility.
              </p>
            </div>
          </div>
          <div className="box">
            <img src="./images/charm_circle-tick.png" />
            <div className="content">
              <h3>Affiliate Recruitment</h3>
              <p>
                We identify and recruit high-quality affiliates who align with
                your brand, leveraging our extensive network to connect you with
                the right partners.
              </p>
            </div>
          </div>
          <div className="box">
            <img src="./images/charm_circle-tick.png" />
            <div className="content">
              <h3>Performance Tracking</h3>
              <p>
                Using advanced analytics, we monitor your program’s performance,
                allowing us to make data-driven adjustments that enhance results
                and maximize ROI.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="box">
            <img src="./images/charm_circle-tick.png" />
            <div className="content">
              <h3>Content Creation</h3>
              <p>
                We develop engaging marketing materials that motivate affiliates
                and resonate with their audiences, helping to boost your brand’s
                visibility.
              </p>
            </div>
          </div>
          <div className="box">
            <img src="./images/charm_circle-tick.png" />
            <div className="content">
              <h3>Ongoing Management</h3>
              <p>
                Our team provides continuous support and optimization, ensuring
                your affiliate program remains competitive and effective over
                time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsWhatWeDo;
