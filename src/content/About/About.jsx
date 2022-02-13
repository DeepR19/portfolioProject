import React from 'react'
import "./About.css";

export default function About() {
  return (
    <div className='about-container'>
        <div className="about-header">
            <h3>About Me</h3>
            <p>Why Choose Me?</p>

            <div className="decor">
                <div className="line"></div>
                <div className='line-decor'></div>
            </div>
        </div>

        <div className="about-content">
            <div className="about-imgBx"></div>
            <div className="about-details">
                <p>Full Stack web and mobile developer with background knowledge of MERN stacks, along with a knack of buliding applications with utlmost effiency. Strong Professional woth a BSC willing to be an asset foa an organosation</p>
                <div className="about-keypoint">
                    <h4>Here are a Few Highlights:</h4>

                    <div className="key">
                        <span></span>
                        <p>Full Stack web and mobile development</p>
                    </div>
                    <div className="key">
                        <span></span>
                        <p>Interactive Front End as per the design</p>
                    </div>
                    <div className="key">
                        <span></span>
                        <p>React abd React Native</p>
                    </div>
                    <div className="key">
                        <span></span>
                        <p>Redux for State Management</p>
                    </div>
                    <div className="key">
                        <span></span>
                        <p>Building Rest APIs</p>
                    </div>
                    <div className="key">
                        <span></span>
                        <p>Managing DataBase</p>
                    </div>
                </div>
                <div className="about-btns">
                    <button className="btn primary-btn">
                        Hire Me
                    </button>

                    <a href="DeepakCV.pdf" download='DeepakCV.pdf'>
                        <button className="btn highlighted-btn">GetResume</button>
                    </a>
                </div>
            </div>


        </div>
    </div>
  )
}
