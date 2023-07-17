import React from 'react';
import './footer.css';
import logo from '../../assets/img/diving-pinoy-high-resolution-logo-color-on-transparent-background.png'

const Footer = () => {
  return (
    <div className='webapp__footer section__padding' id='contact'>
      <div className='webapp__footer-heading'>
        <h1 className='gradient__text'>Go diving before the others</h1>
      </div>
      <div className='webapp__footer-btn'>
        <p>Book Right Now!</p>
      </div>
      
      <div className='webapp__footer-links'>
        <div className='webapp__footer-links_logo'>
          <img src={logo} alt='logo'/>
          <p>Station 3. Manoc Manoc Boracay. Philippines</p>
        </div>
        <div className='webapp__footer-links_div'>
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className='webapp__footer-links_div'>
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          {/* <p>Counters</p> */}
          <p>Contact</p>
        </div>
        <div className='webapp__footer-links_div'>
          <h4>Get in touch</h4>
          <p></p>
          <p>Station 3. Manoc Manoc Boracay. Philippines</p>
          <p>+63 8125 584</p>
          <p>info@pinoydiving</p>
        </div>
      </div>
      <div className='webapp__footer-copyright'>
        <a href='https://ciscodev.website/' target='_blank' rel='author' style={{cursor:'pointer'}} >
          <p>&#169;2023 ciscodev.website all rigths reserved</p>
        </a>
      </div>
    </div>
  )
}

export default Footer