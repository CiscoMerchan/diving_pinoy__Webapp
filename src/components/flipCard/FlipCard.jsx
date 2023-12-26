import React, { useState } from 'react';
import './FlipCard.css'; // Create a CSS file for styling

const FlipCard = ({ images, description }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`flip-card ${isFlipped ? 'flipped' : ''}`} onClick={handleCardFlip}>
      <div className="flip-card-inner">
        {/* Side A: Carousel of images */}
        <div className="flip-card-side flip-card-side-a">
          {images.map((image, index) => (
            <img key={index} src={image} alt={`Image ${index + 1}`} />
          ))}
        </div>

        {/* Side B: Description */}
        <div className="flip-card-side flip-card-side-b">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
