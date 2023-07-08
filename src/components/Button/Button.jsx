import React from 'react'
import './button.css'
const Button = ({ href , title }) => {
  return (
    <div className='app__button'>
        <button type='button'>
            <a href={href}>
                {title}
            </a>
        </button>
    </div>
  )
}

export default Button