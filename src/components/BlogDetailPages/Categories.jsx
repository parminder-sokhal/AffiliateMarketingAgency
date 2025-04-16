// Categories.jsx
import React from "react";
import '../../styles/BlogDetailPage/Categories.scss';

const Categories = ({ categories }) => {
  return (
    <div className="categories">
      <h2>CATEGORIES</h2>
      {categories.map((category) => (
        <div className="category-card" key={category.title}>
          <div className="category-image">
            <img
              src={category.image}
              alt={`Image for ${category.title}`}
              onError={(e) => (e.target.src = `${import.meta.env.BASE_URL}images/default.jpg`)}
            />
          </div>
          <div className="category-content">
            <h3>{category.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Categories;