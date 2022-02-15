import React from 'react'
import "./Header.css";

export default function Header() {
  return (
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
  )
}
