import './home/homeStyles.css';
import About from './home/About';
import Intro from './home/Intro';
import Contact from './home/Contact';
import React from 'react';

function Landing(){
    return(
    <div>
        <Intro />
        <About />
        <Contact />
    </div>);
}
export default Landing;