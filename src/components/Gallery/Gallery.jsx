import React from 'react'
import './gallery.css'
import { BsInstagram } from 'react-icons/bs'
import { images } from '../../constants'
import Button from '../Button/Button'
import { useRef } from 'react'
import { BsArrowLeftShort , BsArrowRightShort} from 'react-icons/bs'
const Gallery = () => {

  const scrollRef = useRef(); 

  const scroll = (direction) => {
    const { current } = scrollRef ;

    if ( direction === 'left' ) {
      current.scrollLeft -= 332 ;
    } else {
      current.scrollLeft += 332 ;
    }
  }

  return (
    <div className='app__gallery flex__center' id='gallery'>
      <div className="app__gallery-content">
        <div className="app__gallery-instagram flex__center">
          <BsInstagram color='#fff' fontSize='2rem'/>
          <h2>Instagram</h2>
        </div>
        <h1>Photo Gallery</h1>
        <p>This is a series of my photos, although not much, but I have collected photos of sunsets that are extremely beautiful, because they reflect my mood and who I am</p>
        <Button href="https://www.instagram.com/namng_113/" title="View Instagram" />
      </div>
      <div className="app__gallery-images flex__center">
        <div ref={scrollRef} className="app__gallery-images_container">
          <div className="app__gallery-images-card flex__center">
            <img src={images.gallery_01} alt="glr1" />
            <div className="app__gallery-images-logo">
              <BsInstagram color='#fff' fontSize='2rem'/>
            </div>
          </div>

          <div className="app__gallery-images-card flex__center">
            <img src={images.gallery_02} alt="glr2" />
            <div className="app__gallery-images-logo">
              <BsInstagram color='#fff' fontSize='2rem'/>
            </div>
          </div>

          <div className="app__gallery-images-card flex__center">
            <img src={images.gallery_03} alt="glr3" />
            <div className="app__gallery-images-logo">
              <BsInstagram color='#fff' fontSize='2rem'/>
            </div>
          </div>

          <div className="app__gallery-images-card flex__center">
            <img src={images.gallery_04} alt="glr4" />
            <div className="app__gallery-images-logo">
              <BsInstagram color='#fff' fontSize='2rem'/>
            </div>
          </div>

          <div className="app__gallery-images-card flex__center">
            <img src={images.gallery_05} alt="glr5" />
            <div className="app__gallery-images-logo">
              <BsInstagram color='#fff' fontSize='2rem'/>
            </div>
          </div>
        </div>

        <div className="app__gallery-images_arrow">
          <div className="">
            <BsArrowLeftShort onClick={() => scroll("left")} cursor="pointer" style={{borderRadius:'5px' , backgroundColor:'#000', color:"#fff"}} fontSize="2rem" />
          </div>
          <div className="">
            <BsArrowRightShort onClick={() => scroll("right")} cursor="pointer" style={{borderRadius:'5px' , backgroundColor:'#000', color:"#fff"}} fontSize="2rem" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery