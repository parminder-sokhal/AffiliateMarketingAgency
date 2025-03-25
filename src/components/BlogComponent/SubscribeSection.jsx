import React from "react";
import "../../styles/Blog/SubscribeSection.scss";

const SubscribeSection = () => {
  return (
    <div className="subscribe-section">
      <div className="subscribe-content">
        <div className="subscribe-row">
          {/* Left Side: Title */}
          <div className="subscribe-left">
            <h2 className="subscribe-title">
              Subscribe for the Latest
              <br />
              Updates!
            </h2>
          </div>

          {/* Right Side: Email Input and Button  */}
          <div className="subscribe-right">
            <div className="email-input-container">
              <input
                type="email"
                placeholder="Sign Up with Your Email"
                className="email-input"
              />
              <button className="subscribe-button">Join Now</button>
            </div>

            {/* Horizontal line separator */}
            <hr />

            {/* Disclaimer  */}
            <p className="disclaimer">
              By subscribing, I agree to receive newsletters via email. Check our{" "}
              <a href="/privacy-policy" className="policy-link">
                Privacy Policy
              </a>{" "}
              for more details.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribeSection;