import React from 'react';

const PostCard = ({ category, readTime, title, description }) => {
  return (
    <div className="post-card">
      <div className="post-card__meta">
        <span className="post-card__category">{category}</span>
        <span className="post-card__read-time">{readTime}</span>
      </div>
      <h3 className="post-card__title">{title}</h3>
      <p className="post-card__description">{description}</p>
    </div>
  );
};

export default PostCard;