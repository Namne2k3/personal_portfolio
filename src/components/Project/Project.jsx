import React from 'react'
import './project.css'
import { Button } from '../../components'
const Project = ({ title, img , url }) => {
  return (
      <div className="app__projects-container-item flex__center">
          <div className="app__projects-container-item_info">
              <h1>{title}</h1>
              <p>I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.</p>
              <Button href={url} title="View Project"/>
          </div>
          <div className="app__projects-container-item_img">
            <img src={img} alt="" />
          </div>
      </div>
  )
}

export default Project