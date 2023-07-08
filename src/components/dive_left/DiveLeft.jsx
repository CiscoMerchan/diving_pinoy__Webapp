import React from 'react'
import './diveLeft.css'
import MoreBtn from '../more_btn/MoreBtn'
const DiveLeft = ({ img1, img2, subTitle, text }) => {
  return (
    <div className='webapp__diveleft'>
      <div className='webapp__diveleft-img'>
        <img src={img1} alt='diving'/>
        <img src={img2} alt='diving'/>
      </div>
      <div className='webapp__diveleft-content'>
        <h2>{subTitle}</h2>
        <p>{text}<MoreBtn /></p>
        
      </div>
    </div>
  )
}

export default DiveLeft