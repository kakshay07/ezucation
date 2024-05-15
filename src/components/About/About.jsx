/* eslint-disable no-unused-vars */
import React from 'react'
import './About.css';
import about_img from '../../assets/project images/about.png'
import play_icon from '../../assets/project images/play-icon.png'


const About = ({setPlaystate}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} className='about-img'/>
            <img src={play_icon} className='play-icon'onClick={()=>{
                setPlaystate(true)
            }}/>
        </div>
        <div className="about-right">
            <h3>
                About university
            </h3>
            <h2>
                Nurturing tommorws leader today
            </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta blanditiis fuga hic pariatur possimus vel autem quae, dolore eveniet eum! Tenetur repudiandae odio maiores! Nulla minima iusto maiores saepe enim!</p>
           
        </div>
      
    </div>
  )
}

export default About
