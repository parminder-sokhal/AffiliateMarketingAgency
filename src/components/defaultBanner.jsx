import React from "react";
import { Link } from "react-router-dom";
import "../styles/DefaultBanner.scss";

const DefaultBanner = ({ componentName, ...props }) => {
  return (
    <div className="aboutus-banner" {...props}>
      <div className="aboutus-banner__content">
        <h1 className="aboutus-banner__title">{componentName}</h1>
        <Link to="/" className="aboutus-banner__link">
          <span className="aboutus-banner__text">Home</span>
          <span className="aboutus-banner__arrow">→</span>
          <span className="aboutus-banner__text">{componentName}</span>
        </Link>
      </div>
    </div>
  );
};

export default DefaultBanner;
