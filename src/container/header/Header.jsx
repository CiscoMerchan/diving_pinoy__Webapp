import React, {useEffect, useState}from 'react';
import './header.css'
// import headerPic from '../../assets/img/headerPic.JPG'
import padiResortIcon from '../../assets/img/icons/padiresort_icon.png'
import logo from '../../assets/img/diving-pinoy-high-resolution-logo-color-on-transparent-background.png'
const Header = () => {
  // Random image for header
  const randomImages = [
    '../../assets/img/headerPic.JPG',
    '/images/coursesImg/P3081028.JPG',
    '/images/diveSite/angolPoint/angolP4.JPG',
    '/images/diveSite/balinhai/b02.JPG',
    '/images/funDive/P6270968.JPG',
    '/images/diveSite/camiaII/camiaII02.JPG',
    '/images/diveSite/punta_bunga/puntaB03.jpg'
  ]

  // Function to get random images from `randomImages`
  const getRandomImages = () => {
    const randomIndex = Math.floor(Math.random() * randomImages.length);
    return randomImages[randomIndex];
  };
  // Refresh header image every 10 seconds
  const [currentImage, setCurrentImage] = useState(getRandomImages());

  useEffect(() => {
    // Set up an interval to change the image every 10 seconds
    const intervalId = setInterval(() => {
      setCurrentImage(getRandomImages());
    }, 10000);

    // Clean up the interval when the component is unmounted or dependencies change
    return () => clearInterval(intervalId);
  }, [randomImages]);
  
  return (
    <div className='web__app-header'>
      <img className='logo' src={logo} alt='logo'/>
      <img className='bg_img'src={currentImage} alt='header_pic'/>
      <img className='icon' src={padiResortIcon} alt='padi_icon' />
    </div>
  )
  }

export default Header