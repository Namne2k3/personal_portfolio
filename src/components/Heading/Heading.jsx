import React from 'react'
import './heading.css'
import { images } from '../../constants'
const Heading = () => {
  return (
    <div id='about' className='app__heading app__wrapper app__bg section__padding'>
      <div className="app__wrapper_info">
        <h1>Hello, my name is Hoang Nam</h1>
        <p>Short text with details about you, what you do or your professional career. You can add more information on the about page.</p>
      </div>
      <div className="app__wrapper_img">
        <img src={images.logo_bg_namne} alt="" />
      </div>
    </div>
  )
}

export default Heading