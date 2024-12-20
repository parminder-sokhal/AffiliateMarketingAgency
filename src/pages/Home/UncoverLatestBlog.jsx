import React from "react";
import "../../styles/homepage/UncoverLatestBlog.scss";

const UncoverLatestBlog = () => {
  return (
    <div className="uncover-latest-blog">
      <div className="left-side">
        <h2>Uncover the Latest Blog</h2>
        <p className="description">
          With our comprehensive blog on everything affiliate marketing, stay
          ahead of the curve in the digital world.
        </p>
        <a href="/blog">
          <button className="read-more-btn">Read More</button>
        </a>
      </div>
      <div className="right-side">
        <img src="./images/cuate2.png" alt="Latest Blog" />
      </div>
    </div>
  );
};

export default UncoverLatestBlog;
