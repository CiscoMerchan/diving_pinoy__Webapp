import React from 'react'
import './AboutCard.css'
const AboutCard = ({ title, image, text }) => {
  return (
    < div className='webapp_aboutCard'>
        <div className='webapp_aboutCard-title'>
            <h2>{title}</h2>
        </div>        
        <div className='webapp_aboutCard-container'>
            <div className='webapp_aboutCard-container-image'>
                <img src={image} alt={title} />
            </div>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default AboutCard