import React, { useState } from 'react';
import "./../styles/star.css";

const CustomeStarRating = ({ initialRating, onChange,editable }) => {
  const [rating, setRating] = useState(initialRating);

  const handleRatingClick = (newRating) => {
    if(editable){

      setRating(newRating);
      onChange(newRating);
    }
  };

  return (
    <div className="custom-star-rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`star ${star <= rating ? 'active' : ''}`}
          onClick={() => handleRatingClick(star)}
          editable={editable}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default CustomeStarRating;
