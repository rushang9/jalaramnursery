import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Programs from './components/Programs/Programs';
import Title from './components/Title/Title';
import About from './components/About/About';
import Campus from './components/Campus/Campus';
import Testimonial from './components/Testimonial/Testimonial';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Videoplayer from './components/Videoplayer/Videoplayer';

const App = () => {

  const [playState,setPlaystate] = useState(false)
  return (
    <div>
      <Navbar />
      <Hero />
      <div className='container'>
        <Title subtitle = 'our program' title = 'What We Offer' />
      <Programs />
      <About setPlaystate = {setPlaystate}/>
      <Title subtitle = 'Gallery' title = 'Campus Photos' />
      <Campus />
      <Title subtitle = 'TESTIMONIALS' title = 'What Student Says' />
      <Testimonial />
      <Title subtitle = 'Contact us' title = 'get in touch' />
      <Contact />
      <Footer />
      </div>
      <Videoplayer playState = {playState}  setPlaystate = {setPlaystate} />
    </div>
  )
}

export default App
