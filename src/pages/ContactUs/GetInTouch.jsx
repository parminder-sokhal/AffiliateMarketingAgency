import React, { useState } from "react";
import "../../styles/ContactUs/GetInTouch.scss";

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send the formData to the backend here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="get-in-touch-container">
      <div className="contact-info">
        <h1>Contact Us</h1>
        <p>Phase Sector 59, Sahibzada Ajit Singh Nagar, Punjab</p>
        <p>Email: info@linkpro.com</p>
        <p>Phone: +91 8409120206</p>
        <p>Monday - Friday 10:00 AM - 6:00 PM</p>
      </div>
      <div className="form-container">
        <h1>Get In Touch</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Enter Phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default GetInTouch;
