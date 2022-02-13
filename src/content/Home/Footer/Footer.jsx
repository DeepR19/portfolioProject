import React from 'react';
// import Img from '../../../assets/Home/shape-bg.png'
import './Footer.css';

export default function Footer() {
  return (
    <div className="footer-container">
        <div className="footer-parent">

            {/* use of require in react to intake image */}
            <img src={require("../../../assets/Home/shape-bg.png")} alt="no internet connection" />
        </div>
    </div>
  )
}
