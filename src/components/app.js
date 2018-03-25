import React, { Component } from 'react';
import { Navigation } from './Navigation/Navigation';
import { Slide } from './Slide/Slide';
import { Skills } from './Skills/Skills';
import { Projects } from './Projects/Projects';
import { About } from './About/About';
import { Contact } from './Contact/Contact';
import './app.scss';


const App = () => {
  const slides = [
    {color: 'white', image: 'https://c1.staticflickr.com/3/2899/33800958416_a16b44aac9_o.jpg', component: ''},
    {color: '#f9f9f9', image: false, component: <Skills />},
    {color: '#c6c6c6', image: false, component: <Projects />},
    {color: '#f9f9f9', image: false, component: <About />},
    {color: '#c6c6c6', image: false, component: <Contact />}
    ];
  return (
    <div>
      <Navigation />
      {slides.map((slide, i) => 
        <Slide key={i} i={i} color={slide.color} image={slide.image}>{slide.component}</Slide>
        )}
    </div>
  )
}

export default App;
