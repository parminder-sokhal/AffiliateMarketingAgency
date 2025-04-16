import React from "react";
import "../../styles/Blog/BlogBoxComponent.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const BlogBoxComponent = () => {
  const categories = [
    "Program Design",
    "Data & Analysis",
    "Compliance & Fraud Monitoring",
    "Partnership Optimization",
    "Partner Recruitment",
  ];

  return (
    <nav className="outer-box" aria-label="Blog categories">
      <div className="inner-box-container">
        {categories.map((category, index) => (
          <div key={category} className="inner-box">
            <a href={`#${category.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`}>
              {category}
            </a>
            {index < categories.length - 1 && <span className="divider"> | </span>}
          </div>
        ))}
      </div>
      <div className="navbar-buttons">
        <button aria-label="Previous categories">
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button aria-label="Next categories">
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </nav>
  );
};

export default BlogBoxComponent;