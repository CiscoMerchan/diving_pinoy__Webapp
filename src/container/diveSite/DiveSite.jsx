import React from 'react';
import FlipCard from '../../components/flipCard/FlipCard'; 

const CardList = ({ cardData }) => {
  return (
    <div className="card-list">
      {cardData.map((card) => (
        <FlipCard key={card.id} images={card.images} description={card.description} />
      ))}
    </div>
  );
};

export default CardList;
