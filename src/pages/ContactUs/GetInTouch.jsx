import React, { useState } from "react";
import "../../styles/ContactUs/GetInTouch.scss";
import { PiMapPinFill } from "react-icons/pi";
import { IoMail } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineAccessTime } from "react-icons/md";

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
    console.log("Form submitted:", formData);
  };

  return (
    <div className="get-in-touch-container">
      <div className="contact-info">
        <h1>Contact Us</h1>
        <p>
          <PiMapPinFill />
          &nbsp;Phase 5 Sector 59, Sahibzada Ajit Singh Nagar, Punjab
        </p>
        <p>
          <IoMail />
          &nbsp;info@linkpro.com
        </p>
        <p>
          <FaPhoneAlt />
          &nbsp;+91 8409120206
        </p>
        <p>
          <MdOutlineAccessTime />
          &nbsp;Monday - Friday 9:00 AM - 10:00 PM
        </p>
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
