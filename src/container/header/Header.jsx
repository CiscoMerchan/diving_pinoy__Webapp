import React from 'react';
import './header.css'
import headerPic from '../../assets/img/headerPic.JPG'
const Header = () => {
  return (
    <div className='web__app-header'>
      <img src={headerPic} alt='header_pic'/>
    </div>
  )
}

export default Header