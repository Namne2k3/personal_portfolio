import React from 'react'
import { BsInstagram , BsFacebook , BsGithub } from 'react-icons/bs'
import './footer.css'
const Footer = () => {
  return (
    <div className='app__footer flex__center section__padding'>
        <div className="app__footer-links flex__center">
            <a href="https://www.instagram.com/namng_113/">
                <BsInstagram className='app__footer-logo'/>
            </a>
            <a href="https://www.facebook.com/namng1111/">
                <BsFacebook className='app__footer-logo' />
            </a>
            <a href="https://github.com/Namne2k3">
                <BsGithub className='app__footer-logo' />
            </a>
        </div>
        <p>Tp. Bien Hoa - 7/8/2023</p>
    </div>
  )
}

export default Footer