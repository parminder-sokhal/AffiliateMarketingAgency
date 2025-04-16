import React, { useState } from 'react';
import '../../styles/BlogDetailPage/LikeDislike.scss';

const LikeDislike = () => {
  const [next, setNext] = useState(); // Initial like count
  const [previous, setPrevious] = useState(); // Initial dislike count

  const handleNext = () => {
    setLikes(next + 1); // Increment likes (future: API call to backend)
  };

  const handlePrevious = () => {
    setDislikes(previous + 1); // Increment dislikes (future: API call to backend)
  };

  return (
    <div className="like-dislike-container" role="region" aria-label="Like and Dislike Controls">
      <button
        className="like-button"
        onClick={handleNext}
      >
        {previous} Previous
      </button>
      <button
        className="dislike-button"
        onClick={handlePrevious}
        aria-label="Dislike this content"
        aria-live="polite"
      >
        {next} Next
      </button>
    </div>
  );
};

export default LikeDislike;