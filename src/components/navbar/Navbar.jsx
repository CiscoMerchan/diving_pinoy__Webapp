import React from 'react'
// New react-route-dom to start pages
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
// import logo from '../../assets/img/diving-pinoy-high-resolution-logo-color-on-transparent-background.png'
import './navbar.css'

const Navbar = () => {
    const Menu = () => (
        <>
            <p><Link to='/'>Home</Link></p>
            <p><Link to='/dive'>Dive</Link></p>
            <p><Link to='/about'>About</Link></p>
            <p><Link to='/blog'>Blog</Link></p>
            <p><Link to='/contact'>Contact</Link></p>
        </>
      )
    
    
      const [toggleMenu, setToggleMenu]=useState(false);
      return (
        <div className='webapp__navbar'>
          <div className='webapp__navbar-links'>
            <div className='webapp__navbar-links-logo'>
              <h1>Diving Pinoy</h1>
              {/* <img src={logo} alt='logo'/> */}
            </div>
            <div className='webapp__navbar-links_container'>
              <Menu />
            </div>
          </div>
          <div className='webapp__navbar-sign'>
            {/* <p>Sign in</p> */}
            <button type='button'>Book Now !</button>
          </div>
          <div className='webapp__navbar-menu'>
            {toggleMenu
            ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
            : <RiMenu3Line  color="#fff" size={27} onClick={() => setToggleMenu(true)} />
            }
            {toggleMenu && (<div className='webapp__navbar-menu_container scale-up-center'>
              <div className='webapp__navbar-menu_container-links'>
                <Menu />
                <div className='webapp__navbar-menu_container-links-sign'>
                  <p>Book Now</p>
                  <button type='button'>Book Now</button>
                </div>
              </div>
            </div>
            )}
          </div>
        </div>
      )
}

export default Navbar