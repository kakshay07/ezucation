/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Hero from './components/Hero/Hero'
import { Navbar } from './components/Navbar/Navbar'
import Programs from './components/Programs/Programs';
import Title from './components/Title/Title';
import About from './components/About/About';
import Campus from './components/Campus/Campus';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Vedioplayer from './components/Vedioplayer/Vedioplayer';
 const App = () => {

  const [playstate,setPlaystate]=useState(false);
  return (
    <div>
<Navbar/>
<Hero/>
<div className='container'>
  <Title subtitle='our program' title='what we offer'/>
<Programs/>
<About setPlaystate={setPlaystate}/>
<Title subtitle='Gallery' title='campus photos  '/>
<Campus/>
<Title subtitle='Testimonials' title='What student says  '/>
<Testimonials/>
<Title subtitle='CONTACT US' title='Get in Touch'/>
<Contact/>
<Footer/>
{/* <Vedioplayer playstate={playstate} setPlaystate={setPlaystate}/> */}
</div>

    </div>
  )
}
export default App;