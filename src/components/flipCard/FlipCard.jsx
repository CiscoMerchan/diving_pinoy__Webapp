import React, { useState } from 'react';
import './FlipCard.css';
import { findAllByTitle } from '@testing-library/react';

const FlipCard = ({ title, images, depth, level, description }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <>
      <div className='webapp__flip-card'>
      <h3 className='webapp__flip-card-title'>{title}</h3>
      <div className={`flip-card ${isFlipped ? 'flipped' : ''}`} onClick={handleCardFlip}>
        <div className="flip-card-inner">
          {/* Side A: Carousel of images */}
          <div className="flip-card-side flip-card-side-a">
            {images}
          </div>

          {/* Side B: Description */}
          <div className="flip-card-side flip-card-side-b">
            <p className='card_subtext'>Depth: {depth}</p>
            <p className='card_subtext'>Level from: {level}</p>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
    </>  
  );
};

export default FlipCard;
