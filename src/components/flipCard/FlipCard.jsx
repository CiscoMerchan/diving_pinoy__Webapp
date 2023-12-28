import React, { useState } from 'react';
import './FlipCard.css';

const FlipCard = ({ images, description }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className='webapp__flip-card'>
      <div className={`flip-card ${isFlipped ? 'flipped' : ''}`} onClick={handleCardFlip}>
        <div className="flip-card-inner">
          {/* Side A: Carousel of images */}
          <div className="flip-card-side flip-card-side-a">
            {images}
          </div>

          {/* Side B: Description */}
          <div className="flip-card-side flip-card-side-b">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;