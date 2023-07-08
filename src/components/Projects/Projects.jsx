import React from 'react'
import './projects.css'
import { images } from '../../constants'
import { Project } from '../../components'

const Projects = () => {
  return (
    <div id='projects' className='app__projects flex__center section__padding'>
        <div className="app__projects-title flex__center">
            <h1>Projects</h1>
        </div>
        <div className="app__projects-container flex__center">
            <Project title="What GPT-3?" url="https://namne2k3.github.io/modern_website_1/" img={images.project_1}/>
            <Project title="Restaurant Webpage" url="https://namne2k3.github.io/modern_website_2/" img={images.project_2}/>
            <Project title="Calculator" url="https://namne2k3.github.io/Calculator/" img={images.project_3}/>
        </div>
    </div>
  )
}

export default Projects