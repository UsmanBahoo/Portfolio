import React from 'react';
import Home from './Home';
import About from './About';
import Skill from './Skill';
import Project from './Project';
import Testimonials from './Testimonials';
import Contact from './Contact';


export default function Main() {
  return (
    <div>
        <Home/>
        <About/>
        <Skill/>
        <Project/>
        <Testimonials/>
        <Contact/>
    </div>
  );
}
