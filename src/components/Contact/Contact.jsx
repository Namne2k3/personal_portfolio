import React from 'react'
import './contact.css'
const Contact = () => {

    const mySubmitFunction = (e) => {
        e.preventDefault();
    }

    return (
    
        <section className='app__contact section__padding flex__center' id='contact'>
            
            <div className="app__contact-title flex__center">
                <h1>Contact</h1>
            </div>
            <form className='app__contact-form' action="#">
                <div className="app__contact-item flex__start">
                    <label htmlFor="name">Name</label>
                    <input placeholder='Enter your name' id='name' type="text" />
                </div>
                <div className="app__contact-item flex__start">
                    <label htmlFor="email">Email</label>
                    <input placeholder='Enter your email' id='email' type="email" />
                </div>
                <div className="app__contact-item flex__start">
                    <label htmlFor="message">Message</label>
                    <textarea placeholder='' name="message" id="message" cols="30" rows="10"></textarea>
                </div>

                <div className='app__contact-item_button'>
                    <button onSubmit={(e) => mySubmitFunction(e) }  type='submit'>Send</button>
                </div>
            </form>

        </section>
  )
}

export default Contact