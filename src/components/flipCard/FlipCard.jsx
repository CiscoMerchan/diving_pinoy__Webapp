import React, { useState } from 'react';
import './FlipCard.css';

const FlipCard = ({ title, images, depth, level, description }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardFlip = () => {
    setIsFlipped(!isFlipped);
  };
  // When a dot (.) on the text description text to the next line
  const renderDescriptionSentences = () => {
    const sentences = description.split('.');
    return sentences.map((sentence, index) => (
      <p key={index}>{sentence}.</p>
    ));
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
            <div className='card_subtext'>
              <p><span>Depth: </span> {depth}</p>
              <p><span>Level from: </span> {level}</p>
            </div>
            <div className='scroll'>
            {renderDescriptionSentences()}
            </div>
            
            {/* <p>{description}</p> */}
          </div>
        </div>
      </div>
    </div>
    </>  
  );
};

export default FlipCard;
