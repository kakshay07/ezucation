/* eslint-disable no-unused-vars */
import React from 'react'
import './Campus.css'
import gallery1 from '../../assets/project images/gallery-1.png'
import gallery2 from '../../assets/project images/gallery-2.png'
import gallery3 from '../../assets/project images/gallery-3.png'
import gallery4 from '../../assets/project images/gallery-4.png'
import white_arrow from '../../assets/project images/white-arrow.png'
const Campus = () => {
  return (
    <div className='campus'>
      <div className="gallery">
        <img src={gallery1}/>
        <img src={gallery2}/>
        <img src={gallery3}/>
        <img src={gallery4}/>
      </div>
      <button className='btn dark-btn'>See More Here <img src={white_arrow}/></button>
    </div>
  )
}

export default Campus
