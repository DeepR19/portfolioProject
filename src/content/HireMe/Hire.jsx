import React from 'react';
import {NavLink} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowLeftLong}from "@fortawesome/free-solid-svg-icons"
import {faGithub, faTelegram, faFacebookF}from "@fortawesome/free-brands-svg-icons"
import "./Hire.css";

export default function Hire() {
    const Togg =(e)=>{
        e.target.classList.toggle("active")
    }
    const Togg1 =(e)=>{
        const dov = document.querySelector(".navIn");
        dov.classList.toggle("active")
    }
  return (
    <div className='hire-container'>

        <div className="hire-content">
            <div className="hire-header">
                <NavLink to='/'>
                    <FontAwesomeIcon className='back' icon={faArrowLeftLong}/>
                </NavLink>
            {/* <FontAwesomeIcon className='hireLink' icon={faEllipsisVertical} /> */}
            
            
            <div class="navIn" onClick={Togg}>
                <span onClick={Togg1}>
                    <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                </span>
                <span onClick={Togg1}>
                    <FontAwesomeIcon icon={faTelegram}></FontAwesomeIcon>
                </span>
                <span onClick={Togg1}>
                    <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
                </span>
            </div>

            </div>
            <h3>Hello!</h3>
            <form onSubmit={(e)=>e.preventDefault()}>
                <div className=" hire hire-company">
                    <label htmlFor="name">What is your Company name?</label>
                    <input type="text" name="name" id="name" placeholder='Enter your answer'/>
                </div>
                <div className=" hire hire-email">
                    <label htmlFor="name">What email address should I use to get in touch?</label>
                    <input type="text" name="email" id="email" />
                </div>
                <div className=" hire hire-website">
                    <label htmlFor="name">What website or social media page can I visit to find out more info about your company?</label>
                    <input type="text" name="website" id="website" />
                </div>

                <button type="submit">
                    Submit
                </button>
            </form>
        </div>

        <p>Thanks for Contacting me...</p>
    </div>
  )
}
