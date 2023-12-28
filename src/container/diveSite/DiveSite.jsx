import React from 'react';
import './DiveSite.css'
import FlipCard from '../../components/flipCard/FlipCard'; 
import Carousel from '../../components/carousel/Carousel';

const DiveSite = ({ cardData }) => {
  return (
    
    <div className="webapp__divesite">
      {cardData.map((card) => (
        <FlipCard key={card.id} 
        images= {<Carousel images={card.images} />}
        description={card.description} />
      ))}
    </div>
  );
};

export default DiveSite;
