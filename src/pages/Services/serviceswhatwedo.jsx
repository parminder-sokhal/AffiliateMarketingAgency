import React from "react";
import "../../styles/services/ServicesWhatWeDo.scss";

const servicesData = [
  {
    number: "01.",
    title: "Full Program Management",
    description:
      "From strategy development to ongoing management, we cover every aspect of your affiliate program for seamless execution.",
  },
  {
    number: "02.",
    title: "Partner Recruitment",
    description:
      "We utilize advanced analytics to ensure your program is performing at its best, maximizing results and ROI.",
  },
  {
    number: "03.",
    title: "Partner Optimization",
    description:
      "Our content creation services are designed to engage affiliates and drive audience engagement, boosting conversions.",
  },
  {
    number: "04.",
    title: "Program Design",
    description:
      "We provide expert support throughout the entire process, ensuring your affiliate marketing program continues to evolve and thrive.",
  },
  {
    number: "05.",
    title: "Data Analysis",
    description:
      "You’ll receive in-depth performance reports to stay informed about your program’s progress and its impact on your business goals.",
  },
  {
    number: "06.",
    title: "Compliance & Fraud Prevention",
    description:
      "We identify and recruit affiliates who best align with your brand, helping you expand into new markets and demographics.",
  },
];

const ServicesWhatWeDo = () => {
  return (
    <section className="services-what-we-do">
      <div className="heading">
        <p>What We Do</p>
        <h2>Our LinkPro Services </h2>
      </div>

      <div className="boxes">
        {servicesData.map((service, index) => (
          <div className="box" key={index}>
            <h1>{service.number}</h1>
            <span>{service.title}</span>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesWhatWeDo;
