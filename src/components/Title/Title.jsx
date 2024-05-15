import React from 'react';
import PropTypes from 'prop-types'
import './Title.css'

const Title = ({subtitle,title}) => {

  
  return (
    <div className='title'>
      <p>{subtitle}</p>
      <h2>{title}</h2>
    </div>
  )
}




export default Title
Title.PropTypes={
    subtitle:PropTypes.any,
    title:PropTypes.any,
}