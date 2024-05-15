/* eslint-disable no-unused-vars */
import React, { useState,useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';
import logo from '../../assets/project images/logo.png'
import menu_icon from '../../assets/project images/menu-icon.png'

export const Navbar = () => {
const [sticky ,setSticky]=useState(false);
useEffect(() => {
 window.addEventListener('scroll',()=>{
// if(window.scrollY > 50){
//     setSticky(true)
// }
// setSticky(false)
window.scrollY > 150 ? setSticky(true) :setSticky(false)
 })
    }, [])
  const [mobile,setMobile]=useState(false)
    const toggleMenu=()=>{
      mobile ? setMobile(false):setMobile(true)

    }


  return (
    <nav className={`container ${sticky ?  'dark-nav':''}`}>
        <img src={logo} className='logo'></img>
        <ul className={mobile ? '': 'hide-mobile-menu'}>
            <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
            <li><Link to='program' smooth={true} offset={-260} duration={500}>Program</Link></li>
            <li><Link to='about' smooth={true} offset={-150} duration={1000}>About us</Link></li>
            <li><Link to='campus' smooth={true} offset={-260} duration={500}>campus</Link></li>
            <li><Link to='testimonials' smooth={true} offset={-250} duration={500}>Testimonials</Link></li>
            <li><Link to='contact' smooth={true} offset={-260} duration={500} className='btn'>Contact us</Link></li>
        </ul>
        <img src={menu_icon} alt="" className='menu-icon'onClick={toggleMenu} />
    </nav>
  )
}
