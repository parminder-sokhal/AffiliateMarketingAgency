import React from "react";
import "../../styles/Blog/BlogBoxComponent.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const BlogBoxComponent = () => {
  const boxes = [
    "Software Developer",
    "Software Engineer",
    "Backend Developer",
    "Frontend Developer",
  ];

  return (
    <div className="outer-box">
      <div className="inner-box-container">
        {boxes.map((box , index) => (
          <div key={index} className="inner-box">
            <a href="#">{box}</a>
            {index < boxes.length - 1 && (
              <span className="divider"> | </span>
            )}{" "}
          </div>
        ))}
      </div>
      <div className="navbar-buttons">
        <button>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
};

export default BlogBoxComponent;
