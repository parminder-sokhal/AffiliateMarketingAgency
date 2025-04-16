import React from "react";
import { useNavigate } from "react-router-dom";

const ImagePostCard = ({ category, readTime, title, description, imageUrl, id }) => {
  const navigate = useNavigate();

  return (
    <article
      className="image-post-card"
      onClick={() => navigate(`/blogs/${id}`)}
      tabIndex={0}
      role="button"
      aria-label={`Read more about ${title}`}
      onKeyDown={(e) => e.key === "Enter" && navigate(`/blogs/${id}`)}
    >
      {imageUrl && (
        <div className="image-post-card__image">
          <img src={imageUrl} alt={title} loading="lazy" />
        </div>
      )}
      <div className="image-post-card__content">
        <div className="image-post-card__meta">
          <span className="image-post-card__category">{category}</span>
          <span className="image-post-card__read-time">{readTime}</span>
        </div>
        <h3 className="image-post-card__title">{title}</h3>
        <p className="image-post-card__description">{description}</p>
      </div>
    </article>
  );
};

export default ImagePostCard;