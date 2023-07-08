import React from 'react'
import './diveRight.css'
import MoreBtn from '../more_btn/MoreBtn'
const DiveRight = ({ img1, img2, subTitle, text }) => {
  return (
    <div className='webapp__diveright'>
      <div className='webapp__diveright-img'>
        <img src={img1} alt='diving'/>
        <img src={img2} alt='diving'/>
      </div>
      <div className='webapp__diveright-content'>
        <h2>{subTitle}</h2>
        <p>{text}<MoreBtn /></p>
        
      </div>
    </div>
  )
}

export default DiveRight