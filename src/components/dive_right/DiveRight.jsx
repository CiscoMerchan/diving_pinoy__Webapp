import React from 'react'
import './diveRight.css'
import MoreBtn from '../more_btn/MoreBtn'
import Carousel from '../carousel/Carousel';
const DiveRight = ({ img1, img2, subTitle, text }) => {
  return (
    <div className="webapp__diveright">
    <div className="webapp__diveright-img">
      <Carousel images={[img1, img2]} />
    </div>
    <div className="webapp__diveright-content">
      <h2>{subTitle}</h2>
      <p>
        {text}
      </p>
      <MoreBtn />
    </div>
  </div>
);
};

export default DiveRight