import React from "react";
import "../../styles/Blog/SubscribeSection.scss";

const SubscribeSection = () => {
  return (
    <section className="subscribe-section" aria-label="Subscribe to newsletter">
      <div className="subscribe-content">
        <h3 className="subscribe-title">
          Subscribe for the Latest Updates!
        </h3>
        <div className="subscribe-form">
          <div className="email-input-container">
            <input
              type="email"
              placeholder="Sign Up with Your Email"
              className="email-input"
              aria-label="Email address"
            />
            <button className="subscribe-button">Join Now</button>
          </div>
          <p className="disclaimer">
            By subscribing, I agree to receive newsletters via email. Check our{" "}
            <a href="/privacy-policy" className="policy-link">
              Privacy Policy
            </a>{" "}
            for more details.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SubscribeSection;