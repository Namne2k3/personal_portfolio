/* eslint-disable no-unused-vars */
import { images } from '../../constants';
import { GiHamburgerMenu } from 'react-icons/gi' ;
import { useState } from 'react';
import './navbar.css';
const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <div className='app__navbar flex__center'>
        <div className="app__navbar-logo">
          <img src={images.namlogo} className='app__navbar-logo-img' alt="" />
        </div>
        
        <ul className='app__navbar-links'>
          <li className='app__navbar-links-item'>
            <a href="#about" >About</a>
          </li>
          <li className='app__navbar-links-item'>
            <a href="#gallery" >Gallery</a>
          </li>
          <li className='app__navbar-links-item'>
            <a href="#projects" >Projects</a>
          </li>
          <li className='app__navbar-links-item'>
            <a href="#contact" >Contact</a>
          </li>
        </ul>
       

        <div className="app__navbar-menu">
          <div className="app__navbar-menu-logo">
            <GiHamburgerMenu onClick={() => setToggleMenu((prevToggle) => !prevToggle)} fontSize={27} color='#fff'/>
          </div>

          { toggleMenu && 
            <ul className='app__navbar-menu-links slide-left'>
              <li className='app__navbar-menu-links-item'>
                <a onClick={() => setToggleMenu((prevToggle) => false)} href="#about" >About</a>
              </li>
              <li className='app__navbar-menu-links-item'>
                <a href="#gallery" >Gallery</a>
              </li>
              <li className='app__navbar-menu-links-item'>
                <a onClick={() => setToggleMenu((prevToggle) => false)} href="#projects" >Projects</a>
              </li>
              <li className='app__navbar-menu-links-item'>
                <a onClick={() => setToggleMenu((prevToggle) => false)} href="#contact" >Contact</a>
              </li>
            </ul>
          }
        </div>
    </div>
  )
}

export default Navbar