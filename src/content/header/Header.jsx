import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {faArrowCircleUp}from "@fortawesome/free-solid-svg-icons";

import "./Header.css";

export default function Header() {

    window.addEventListener('scroll',()=>{
        const arrow = document.querySelector('.back-to-top');
        if(window.scrollY > 600){
            arrow.style.cssText = 'opacity: 1;'
        }else{
            arrow.style.cssText = 'opacity: 0;'
        }
    });

  

  return (
      <>
    <div className='header-container' id="header">
        <div className="header-name">
            DeepR19
        </div>

        <div className="header-navigation">
            <li className='page-link active'>
                <a href="#header">Home</a>
            </li>
            <li className='page-link'>
                <a href="#about">AboutMe</a>
            </li>
            <li className='page-link'>
               <a href="#resume">Resume</a>
            </li>
            <li className='page-link'>
                <a href="#contact">ContactMe</a>
            </li>
        </div>
    </div>


  

        {/* <button className="back-to-top">
            <FontAwesomeIcon icon={faArrowCircleUp} className='ico'/>
        </button> */}
    </>
  )
}
