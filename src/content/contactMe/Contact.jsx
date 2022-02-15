import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPaperPlane}from "@fortawesome/free-solid-svg-icons"
import {
    faGithub,
    faLinkedin,
    faTelegram,
    faWhatsapp,
    faYoutube} from '@fortawesome/free-brands-svg-icons'


import "./Contact.css";

export default function Contact() {

    useEffect(()=>{
        AOS.init({
            duration: 2000
        })
    })

    const time =()=>{
        document.querySelector('.contact-send').classList.add('active');

        setTimeout(function(){
            document.querySelector('.contact-send').classList.remove('active');
        },3000);
    }

  return (
    <div data-aos="fade-up" className='contact-container' id='contact'>
        <div className="about-header">
            <h3>Contact Me</h3>
            <p>Lets Keep in Touch</p>

            <div className="decor">
                <div className="line"></div>
                <div className='line-decor'></div>
            </div>
        </div>


        <div className="contact-details">
            {/* <div className="contact-decor"> */}

                <div className="contact-data">
                    <div className="contact-1">
                        <h3>Get In Touch 📧</h3>
                        <div className="colz">
                            <div className="colz-icons">
                                <FontAwesomeIcon icon={faYoutube} className='ico' />
                                <FontAwesomeIcon icon={faGithub} className='ico' />
                                <FontAwesomeIcon icon={faLinkedin} className='ico' />
                                <FontAwesomeIcon icon={faTelegram} className='ico' />
                                <FontAwesomeIcon icon={faWhatsapp} className='ico'/>

                            </div>
                        </div>

                        <div className="imgBx"></div>
                    </div>

                    <div className="contact-2">
                        <form autoComplete='false' className="contact-form">
                            <div className="contact-user-data">
                                <label htmlFor="name">Name</label>
                                <input type="text" name="name" id="name"/>
                            </div>
                            <div className="contact-user-data">
                                <label htmlFor="name">Email</label>
                                <input type="text" name="email" id="email"/>
                            </div>
                            <div className="contact-user-data contact-textarea">
                                <label htmlFor="name">Message</label>
                                <textarea name="message" id="message" cols="35" rows="40"></textarea>
                            </div>
                            
                            <button className='contact-send' onClick={time}>
                                <FontAwesomeIcon icon={faPaperPlane} className='ico' />
                                 Send 
                                 <div className="gif"></div>
                            </button>
                        </form>

                    </div>
                </div>


            </div>
        {/* </div> */}
    </div>
  )
}
