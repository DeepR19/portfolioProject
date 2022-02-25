import React, {useEffect, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowCircleUp}from "@fortawesome/free-solid-svg-icons";

import "./Header.css";

export default function Header() {

 // The back-to-top button is hidden at the beginning
 const [showButton, setShowButton] = useState(false);

 useEffect(() => {
   window.addEventListener("scroll", () => {
     if (window.pageYOffset > 300) {
       setShowButton(true);
     } else {
       setShowButton(false);
     }
   });
 }, []);

 // This function will scroll the window to the top 
 const scrollToTop = () => {
   window.scrollTo({
     top: 0,
     behavior: 'smooth' // for smoothly scrolling
   });
 };




  const changeHeader = ()=>{
      if(window.innerWidth < 740){
            const header = document.querySelector('.header-navigation');
            header.classList.toggle('active');
            const header1 = document.querySelector('.hamburgar');
            header1.classList.toggle('active');
      }
  }

  return (
      <>
    <div className='header-container' id="header">

        <div className="hamburgar" onClick={changeHeader}>
            <span></span>
            <span></span>
            <span></span>
        </div>

        <div className="header-name">
            DeepR19
        </div>

        <div className="header-navigation">
            <li className='page-link active'  onClick={changeHeader}>
                <a href="#header">Home</a>
            </li>
            <li className='page-link'  onClick={changeHeader}>
                <a href="#about">AboutMe</a>
            </li>
            <li className='page-link'  onClick={changeHeader}>
               <a href="#resume">Resume</a>
            </li>
            <li className='page-link'  onClick={changeHeader}>
                <a href="#contact">ContactMe</a>
            </li>
        </div>
    </div>

    {showButton && (
        <button onClick={scrollToTop} className="back-to-top">
            <FontAwesomeIcon icon={faArrowCircleUp}></FontAwesomeIcon>
        </button>
      )}
    </>
  )
}
