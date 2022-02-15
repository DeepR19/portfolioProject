import React, { useEffect } from 'react';

import AOS from "aos";
import "aos/dist/aos.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faLaptopCode,
    faUserGraduate,
    faChartBar,
    faHistory,
    faPalette
}from "@fortawesome/free-solid-svg-icons"

import "./Resume.css";

export default function Resume() {

    useEffect(()=>{
        AOS.init({
            duration: 3000
        })
    })

    const time =()=>{
        const list = document.querySelectorAll('.res-li > li > a');
        const lists = document.querySelectorAll('.res-links');
        function activeLink(){
            list.forEach((item)=>{
                item.classList.remove('active');
                this.classList.add('active');
            });
            lists.forEach((item)=>{
                item.classList.remove('active');
                this.classList.add('active');
            })
        };
        list.forEach((item)=>{
            item.addEventListener('click', activeLink)
        })
        lists.forEach((item)=>{
            item.addEventListener('click', activeLink)
        })
    }


  return (
        <div data-aos="fade-up" className="resume-container" id='resume'>
            <div className="about-header">
                <h3>Resume</h3>
                <p>My formal Bio Details</p>

                <div className="decor">
                    <div className="line"></div>
                    <div className='line-decor'></div>
                </div>
            </div>


            <div className="resume-date-container">
                <div className="resume-link">
                    
                    <div className="resume-icon">
                    <li>
                                <a href="#edu" className='.res-links' onClick={time}>
                                    <FontAwesomeIcon icon={faUserGraduate}/>
                                    Education
                                </a>
                            </li>
                            <li>
                                <a href="#his" className='.res-links' onClick={time}>
                                    <FontAwesomeIcon icon={faHistory}/>
                                    Work History
                                </a>
                            </li>
                            <li>
                                <a href="#code" className='.res-links' onClick={time}>
                                    <FontAwesomeIcon icon={faLaptopCode}/>
                                    Programming Skills
                                </a>
                            </li>
                            <li>
                                <a href="#bar" className='.res-links' onClick={time}>
                                    <FontAwesomeIcon icon={faChartBar}/>
                                    Projects
                                </a>
                            </li>
                            <li>
                                <a href="#interest" className='.res-links' onClick={time}>
                                    <FontAwesomeIcon icon={faPalette}/>
                                    Interests
                                </a>
                            </li>
                        <div className="resume-icon-side"></div>
                        <div className="res-li">
                            <li>
                                <a href="#edu" className='.res-link' onClick={time}>
                                    <FontAwesomeIcon icon={faUserGraduate}/>
                                    Education
                                </a>
                            </li>
                            <li>
                                <a href="#his" className='.res-link' onClick={time}>
                                    <FontAwesomeIcon icon={faHistory}/>
                                    Work History
                                </a>
                            </li>
                            <li>
                                <a href="#code" className='.res-link' onClick={time}>
                                    <FontAwesomeIcon icon={faLaptopCode}/>
                                    Programming Skills
                                </a>
                            </li>
                            <li>
                                <a href="#bar" className='.res-link' onClick={time}>
                                    <FontAwesomeIcon icon={faChartBar}/>
                                    Projects
                                </a>
                            </li>
                            <li>
                                <a href="#interest" className='.res-link' onClick={time}>
                                    <FontAwesomeIcon icon={faPalette}/>
                                    Interests
                                </a>
                            </li>

                        </div>
                    </div>
                </div>

                <div className="resume-link-data">
                    <div className="edu-side" id='edu'>
                        <div className="edu-data">
                            <div className="resume-edu-data">
                                <h3>Satyug Darshan Inst. of Engg. and Tech, Faridabad</h3>
                                <h2>Bachelor of Technology | CSE</h2>
                            </div>
                            <span>2019-present</span>
                        </div>

                        <div className="edu-data">
                            <div className="resume-edu-data">
                                <h3>Blue Bird Se. Sec School, Faridabad</h3>
                                <h2>Schooling</h2>
                            </div>
                            <span>2004-19</span>
                        </div>
                    </div>


                    <div className="work-side" id='his'>
                        <div className="work-data">
                            <h3>NO Work History in any Intern</h3>
                            <p><strong>But,</strong> having experience on alot of Projects</p>
                        </div>
                    </div>


                    <div className="pro-side" id='code'>
                        <div className="pro-data">
                            <div className="pro-work-data">
                                <label>JavaScript</label>
                                <input type="range" name="" id="" value='72'/>
                            </div>
                            <div className="pro-work-data">
                                <label>Java</label>
                                <input type="range" name="" id="" value='50' />
                            </div>
                            <div className="pro-work-data">
                                <label>C</label>
                                <input type="range" name="" id="" value='89'/>
                            </div>
                            <div className="pro-work-data">
                                <label>C++</label>
                                <input type="range" name="" id="" value='40'/>
                            </div>
                            <div className="pro-work-data">
                                <label>MongoDB</label>
                                <input type="range" name="" id="" value='90'/>
                            </div>
                            <div className="pro-work-data">
                                <label>NodeJS</label>
                                <input type="range" name="" id="" value='80'/>
                            </div>
                            <div className="pro-work-data">
                                <label>ExpressJS</label>
                                <input type="range" name="" id="" value='90'/>
                            </div>
                            <div className="pro-work-data">
                                <label>Socket.io</label>
                                <input type="range" name="" id="" value='80'/>
                            </div>
                            <div className="pro-work-data">
                                <label>ReactJS</label>
                                <input type="range" name="" id="" value='70'/>
                            </div>
                            <div className="pro-work-data">
                                <label>React Native</label>
                                <input type="range" name="" id="" value='60'/>
                            </div>
                            <div className="pro-work-data">
                                <label>FireBase</label>
                                <input type="range" name="" id="" value='60'/>
                            </div>
                            <div className="pro-work-data">
                                <label>MySQL</label>
                                <input type="range" name="" id="" value='90'/>
                            </div>
                            <div className="pro-work-data">
                                <label>CSS/ Sass</label>
                                <input type="range" name="" id="" value='95'/>
                            </div>
                            <div className="pro-work-data">
                                <label>HTML</label>
                                <input type="range" name="" id="" value='90'/>
                            </div>
                            <div className="pro-work-data">
                                <label>Python</label>
                                <input type="range" name="" id="" value='80'/>
                            </div>
                        </div>
                    </div>


    
                    <div className="project-side" id='bar'>
                        <div className="project-data">
                            <div className="project-side-data">
                                <h3>MSREN Chatting</h3>
                                
                                <h2>Technology Used: ---</h2>
                                <p>Details</p>
                            </div>

                            <span>2020-29</span>
                        </div>
                        <div className="project-data">

                            <div className="project-side-data">
                                <h3>MSREN Chatting</h3>
                                
                                <h2>Technology Used: ---</h2>
                                <p>Details</p>
                            </div>
                            <span>2020-23</span>
                        </div>
                        <div className="project-data">

                            <div className="project-side-data">
                                <h3>MSREN Chatting</h3>
                                
                                <h2>Technology Used: ---</h2>
                                <p>Details</p>
                            </div>
                            <span>2020-21</span>
                        </div>
                    </div>



                    <div className="interest-side" id='interest'>
                        <div className="interest-data">
                            <span></span>
                            <h3>Music</h3>
                            <p>Lorem edit hic vel placeat. Rem beatae illo tenetur necessitatibus. Sint?</p>
                        </div>
                        <div className="interest-data">
                            <span></span>

                            <h3>Music</h3>
                            <p>Lorem edit hic vel placeat. Rem beatae illo tenetur necessitatibus. Sint?</p>
                        </div>
                        <div className="interest-data">
                        <span></span>

                            <h3>Music</h3>
                            <p>Lorem edit hic vel placeat. Rem beatae illo tenetur necessitatibus. Sint?</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
