import React from "react";
import "../../styles/BlogDetailPage/TableOfContent.scss";

const TableOfContent = ({ tableOfContent }) => {
  return (
    <div className="table-of-content">
      <h2>Table Of Content</h2>
      <ul>
        {tableOfContent.map((item, index) => (
          <li key={index}>
            <a href={`#${item.toLowerCase().replace(/ /g, "-")}`}>{item}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TableOfContent;