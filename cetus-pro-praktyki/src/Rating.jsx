// Rating.jsx

import React from 'react';

const Rating = ({ stars }) => {
  return (
    <div className="rating">
      {[...Array(stars)].map((_, index) => (
        <span key={index}>&#9733;</span>
      ))}
    </div>
  );
};

export default Rating;
