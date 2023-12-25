import React from 'react'

import './Card.css'
import { Link } from 'react-router-dom';
const Card = ({ image_card, alt_image_card, title_card, text_card, for_card}) => {
    
    const wordsToShow = 50; 
      
    // Function to limit the text
    const limitText = (originalText) => {
          const words = originalText.split(' ');
          const limitedText = words.slice(0, wordsToShow).join(' ');
          return limitedText + ' ...';
        };
    return (
    <>
    <div className='webapp__card'>
        <div className='webapp__card-imagen'>
            <img src={image_card} alt={alt_image_card}/>
        </div>    
        <div className='webapp__card-container'>
            <div className='webapp__card-container_title'>
                <h3>{title_card}</h3>
            </div>
            <div className='webapp__card-container_text'>
                <p className='webapp__card-container_subtext'>{for_card}</p>
                <p>{limitText(text_card)}</p>
            </div>
        </div>
        <div className='webapp__card-btn_cta'>
            <p>
            <Link to={`/course-detail/${title_card}`}>Read more</Link>
            </p>
            {/* {btn_cta_card} */}
        </div>
        
    </div>
        
    </>
  )
}

export default Card