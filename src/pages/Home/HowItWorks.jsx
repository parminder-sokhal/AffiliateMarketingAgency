import React, { useState } from "react";
import "../../styles/homepage/HowItWorks.scss"; // Import the SCSS file for styling

const HowItWorks = () => {
  const [selected, setSelected] = useState("discovery");

  // Data for each button (description and image)
  const content = {
    discovery: {
      description: "This is the description for the discovery process. Here, we explain the discovery process in detail to help you understand how we approach discovery.",
      image: "./images/closeup.png", // Image for discovery
    },
    implementation: {
      description: "This is the description for the implementation process. Here, we explain the implementation process in detail to help you understand how we approach implementation.",
      image: "./images/closeup.png", // Image for implementation
    },
    optimization: {
      description: "This is the description for the optimization process. Here, we explain the optimization process in detail to help you understand how we approach optimization.",
      image: "./images/closeup.png", // Image for optimization
    },
    collaboration: {
      description: "This is the description for the collaboration process. Here, we explain the collaboration process in detail to help you understand how we approach collaboration.",
      image: "./images/closeup.png", // Image for collaboration
    },
  };

  const handleButtonClick = (button) => {
    setSelected(button);
  };

  return (
    <section className="how-it-works">
      <div className="heading">
        <h2>How It Works</h2>
      </div>

      <div className="buttons">
        {["discovery", "implementation", "optimization", "collaboration"].map(
          (button) => (
            <button
              key={button}
              className={`work-button ${selected === button ? "selected" : ""}`}
              onClick={() => handleButtonClick(button)}
            >
              {button.charAt(0).toUpperCase() + button.slice(1)}
            </button>
          )
        )}
      </div>

      <div className="description-box">
        <div className="left-side">
          <p>{content[selected].description}</p>
          <button className="contact-btn">Contact Us</button>
        </div>
        <div className="right-side">
          <img src={content[selected].image} alt={selected} />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
