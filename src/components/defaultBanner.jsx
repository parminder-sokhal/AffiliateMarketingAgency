import React from 'react';
import { Link } from 'react-router-dom';  // Import Link for navigation
import '../styles/defaultBanner.scss';  // Import the SCSS file for styling

const defaultBanner = ({ componentName }) => {
  return (
    <div className="aboutus-banner">
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
}

export default defaultBanner;
