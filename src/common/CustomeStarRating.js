import React, { useState } from 'react';
import "./../styles/star.css";

const CustomeStarRating = ({ initialRating, onChange }) => {
  const [rating, setRating] = useState(initialRating);

  const handleRatingClick = (newRating) => {
    setRating(newRating);
    onChange(newRating);
  };

  return (
    <div className="custom-star-rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`star ${star <= rating ? 'active' : ''}`}
          onClick={() => handleRatingClick(star)}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default CustomeStarRating;
