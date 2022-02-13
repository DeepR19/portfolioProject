import React from 'react'
import Typical from 'react-typical';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faGithub,
    faLinkedin,
    faTelegram,
    faWhatsapp,
    faYoutube} from '@fortawesome/free-brands-svg-icons'

import "./Profile.css"


export default function Profile() {
  return (
    <div className="profile-container" id='profile'>
        <div className="profile-parent">
            <div className="profile-details">
                <div className="colz">
                    <div className="colz-icons">
                        <FontAwesomeIcon icon={faYoutube} className='ico' />
                        <FontAwesomeIcon icon={faGithub} className='ico' />
                        <FontAwesomeIcon icon={faLinkedin} className='ico' />
                        <FontAwesomeIcon icon={faTelegram} className='ico' />
                        <FontAwesomeIcon icon={faWhatsapp} className='ico'/>

                    </div>
                </div>


                <div className="profile-details-name">
                    <span className="primary-text">
                        Hello, I'm <span className="highlighted-text">Deepak</span>
                    </span>
                </div>

                <div className="profile-details-role">
                    <span className="primary-text">
                        <h1>
                            <Typical
                                loop={Infinity}
                                steps={[
                                    "Enthusiastic Dev 🔴",
                                    1000,

                                    "Full Stack Developer 😎",
                                    1000,

                                    "MERN Stack Developer 📱",
                                    1000,

                                    "React/React Native Dev 🌐",
                                    1000
                                ]}
                            />
                        </h1>

                        <span className="profile-role-tagline">
                            Knack of building applications with frontEnd and BackEnd operations...
                        </span>
                    </span>
                </div>

                <div className="profile-options">
                    <button className="btn primary-btn">
                        Hire Me
                    </button>

                    <a href="DeepakCV.pdf" download='DeepakCV.pdf'>
                        <button className="btn highlighted-btn">GetResume</button>
                    </a>
                </div>

            </div>

            <div className="profile-picture">
                <div className="profile-picture-background"></div>
            </div>
        </div>
    </div>
  )
}


