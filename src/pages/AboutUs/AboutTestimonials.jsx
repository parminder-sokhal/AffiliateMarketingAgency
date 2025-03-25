import React from "react";
import "../../styles/AboutUs/AboutTestimonials.scss";

const AboutTestimonials = () => {
  // Example testimonials data
  const testimonials = [
    {
      name: "Anshul Rai",
      image: "./images/women1.jpg",
      description:
        "LinkPro transformed our affiliate marketing program. Their strategic approach and hands-on management have significantly boosted our sales and visibility. We couldn’t be happier!",
      rating: 5, // Star rating (1 to 5)
    },
    {
      name: "Shivam",
      image: "./images/men1.jpg",
      description:
        "Their personalized approach and clear communication set them apart from other agencies we’ve worked with. We’ve seen significant growth thanks to their efforts.",
      rating: 4,
    },
    {
      name: "Mohit Raj",
      image: "./images/women2.jpg",
      description:
        "The team at LinkPro is incredible! Their ongoing support and transparent reporting have made a world of difference for our business. Highly recommend their services!",
      rating: 5,
    },
  ];

  return (
    <div className="testimonials-container">
      <div className="testimonials-header">
        <h2>Testimonials</h2>
        <p>
          Our clients trust us to deliver results, and their success stories
          speak for themselves. Here’s what they have to say about working with
          LinkPro:
        </p>
      </div>

      <div className="testimonials-boxes">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-box" key={index}>
            <div className="testimonial-header">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="testimonial-image"
              />
              <h3>{testimonial.name}</h3>
            </div>
            <p className="testimonial-description">{testimonial.description}</p>
            <div className="testimonial-rating">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className={`star ${i < testimonial.rating ? "filled" : ""}`}
                >
                  ★
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutTestimonials;
