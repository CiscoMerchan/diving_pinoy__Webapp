import React from 'react';
import './header.css'
import headerPic from '../../assets/img/headerPic.JPG'
import padiResortIcon from '../../assets/img/icons/padiresort_icon.png'
const Header = () => {
  return (
    <div className='web__app-header'>
      <img className='bg_img'src={headerPic} alt='header_pic'/>
      <img className='icon' src={padiResortIcon} alt='padi_icon' />
    </div>
  )
}

export default Header