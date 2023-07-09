import React from 'react';
import './diveLeft.css';
import MoreBtn from '../more_btn/MoreBtn';
import Carousel from '../carousel/Carousel';

const DiveLeft = ({ img1, img2, subTitle, text }) => {
  return (
    <div className="webapp__diveleft">
      <div className="webapp__diveleft-img">
        <Carousel images={[img1, img2]} />
      </div>
      <div className="webapp__diveleft-content">
        <h2>{subTitle}</h2>
        <p>
          {text}
        </p>
        <MoreBtn />
      </div>
    </div>
  );
};

export default DiveLeft;