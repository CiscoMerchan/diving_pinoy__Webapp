import React from 'react';
import './DiveSite.css'
import FlipCard from '../../components/flipCard/FlipCard'; 
import Carousel from '../../components/carousel/Carousel';

const DiveSite = ({ cardData }) => {
  return (
    <div className='webapp__divesite'>
      <div className='webapp__divesite-title'>
        <h2>Dive Sites</h2>  
      </div>
      <div className="webapp__divesite-container">
        {cardData.map((card) => (
          <FlipCard key={card.id}
          title={card.title} 
          images= {<Carousel 
            images={card.images}
            containerStyle={{ width: '400px', height: '400px' }} 
            />}
          depth={card.depth}
          level={card.level}  
        description={card.description} />
        ))}
      </div>
    </div>  
  );
};

export default DiveSite;
