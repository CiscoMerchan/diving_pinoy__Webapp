import React from 'react'
import './Card'
const Card = ({ image_card, alt_image_card, title_card, text_card, btn_cta_card}) => {
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
                <p>{text_card}</p>
            </div>
        </div>
        <div className='webapp__card-btn_cta'>
            {btn_cta_card}
        </div>
        
    </div>
        
    </>
  )
}

export default Card