import React from 'react';
import "./Hero.style.css"
import hero from '../assets/intro-bg.jpg';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className="hero">
            <div className="mask">

               <img className="intro-img" src={hero} alt="" /> 
            </div>
            <div className="content">
                <p>Hi i'm Ibrahim</p>
                <h1>Front-End Web Developer</h1>
                <div>
                    <a className="btn" href="https://drive.google.com/file/d/1mAKw_mLSRVRBAhKDT6uza_bPcMDoygLb/view?usp=sharing">Download Resume</a>
                   
                </div>
            </div>
            
        </div>
    );
};

export default Hero;