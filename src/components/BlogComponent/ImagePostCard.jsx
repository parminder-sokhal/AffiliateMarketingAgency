import React from 'react';

const ImagePostCard = ({ category, readTime, title, description, imageUrl }) => {
  return (
    <div className="image-post-card">
      <div className="image-post-card__image">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="image-post-card__content">
        <div className="image-post-card__meta">
          <span className="image-post-card__category">{category}</span>
          <span className="image-post-card__read-time">{readTime}</span>
        </div>
        <h3 className="image-post-card__title">{title}</h3>
        <p className="image-post-card__description">{description}</p>
      </div>
    </div>
  );
};

export default ImagePostCard;