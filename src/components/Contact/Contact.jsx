/* eslint-disable no-unused-vars */
import React from 'react'
import './Contact.css'
import meg_icon from '../../assets/project images/msg-icon.png'
import phone_icon from '../../assets/project images/phone-icon.png'
import loc_icon from '../../assets/project images/location-icon.png'
import mail_icon from '../../assets/project images/mail-icon.png'
import arrow from '../../assets/project images/white-arrow.png'



const Contact = () => {
  return (
    <div className='contact'>
    <div className="contact-col">
        <h3>
            Send us a message
            <img src={meg_icon} alt="" />
        </h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque. Ullam dolorem voluptatem consequuntur perspiciatis delectus quidem ad eligendi ea perferendis voluptate consequatur dicta velit soluta maxime, est, error earum?</p>
    <ul>
        <li> <img src={mail_icon} alt="" />Contact@.com</li>
        <li> <img src={phone_icon} alt="" />1234567890</li>
        <li ><img src={loc_icon} alt="" /> Dubai</li>
    </ul>
    </div>
    <div className="contact-col">
     <form>
        <label>Your Name</label>
        <input type="text" name="name" placeholder='enter your name' required/>
        <label>Phone number</label>
        <input type="tel" name="phone" placeholder='enter phone number' required/>
        <label>Write your message here</label>
        <textarea type="text" name="message" rows="6" placeholder='enter message here'/>
        <button type='submit' className='btn dark-btn'>submit <img src={arrow} alt="" /></button>
     </form>
    </div>
    </div>
  )
}

export default Contact;
