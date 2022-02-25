import React, { useEffect, useState} from 'react';
import AOS from "aos";

import "aos/dist/aos.css";

import emailjs from 'emailjs-com';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPaperPlane}from "@fortawesome/free-solid-svg-icons"
import {
    faGithub,
    faLinkedin,
    faTelegram,
    faWhatsapp,
    faYoutube} from '@fortawesome/free-brands-svg-icons'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "./Contact.css";

export default function Contact() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    useEffect(()=>{
        AOS.init({
            duration: 2000
        })
    })

    const notice =()=>{
        if(!name || !email || !message){
            toast.error("Please Fill all details");
            return;
        }
        toast.success("Message send Successfully!");
    };
    

    const time =(e)=>{
        e.preventDefault();

        emailjs.sendForm('service_uohms4h',
         'template_e28148e',
          e.target,
          'user_HQa1E6jwgRkPMWTLNx1g8')
        .then((result) => {
            console.log(result.text);
        }).catch((error) => {
            console.log(error.text);
        });

        document.querySelector('.contact-send').classList.add('active');

        setTimeout(function(){
            document.querySelector('.contact-send').classList.remove('active');
        },3000);

        setName('');
        setEmail('');
        setMessage('');
        // console.log(name, email, message)
    };

   

  return (
    <div data-aos="fade-up" className='contact-container' id='contact'>
        <div className="about-header contact-header">
            <h3>Contact Me</h3>
            <p>Lets Keep in Touch</p>

            <div className="decor">
                <div className="line"></div>
                <div className='line-decor'></div>
            </div>
        </div>


        <div className="contact-details">

            {/* Toast notifier */}
            <ToastContainer
            style={{"margin-top": "80px", "font-weight": "bolder"}}
            className="toaster-container"
            pauseOnHover/>


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
                        <form autoComplete='false' onSubmit={time} className="contact-form">
                            <div className="contact-user-data">
                                <label htmlFor="name">Name</label>
                                <input type="text" value={name} onChange={(e)=>setName(e.target.value)} name="name" id="name"/>
                            </div>
                            <div className="contact-user-data">
                                <label htmlFor="name">Email</label>
                                <input type="text"  value={email} onChange={(e)=>setEmail(e.target.value)} name="email" id="email"/>
                            </div>
                            <div className="contact-user-data contact-textarea">
                                <label htmlFor="name">Message</label>
                                <textarea name="message"  value={message} onChange={(e)=>setMessage(e.target.value)} id="message" cols="35" rows="40"></textarea>
                            </div>
                            
                            <button type='submit' className='contact-send' onClick={notice}>
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
