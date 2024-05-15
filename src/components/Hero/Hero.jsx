/* eslint-disable no-unused-vars */
import React from 'react'
import './Hero.css';
import dark_arrow from '../../assets/project images/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>we ensure eduaction is better world in real world entities</h1>
            <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt, consectetur dignissimos neque magnam laudantium assumenda omnis quidem consequuntur nulla deserunt delectus hic optio aspernatur iure, cumque nihil, ipsum laboriosam! Sequi!</p>
            <button className='btn'>Explore More <img src={dark_arrow}></img></button>
        </div>
      
    </div>
  )
}

export default Hero

