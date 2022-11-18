import './home/homeStyles.css';
import About from './home/About';
import Intro from './home/Intro';
import Contact from './home/Contact';
import React from 'react';

function Landing(){
    const reveal = ()=> {
        var reveals = document.querySelectorAll(".content_block");
      
        for (var i = 0; i < reveals.length; i++) {
          var windowHeight = window.innerHeight;
          var elementTop = reveals[i].getBoundingClientRect().top;
          var elementVisible = 150;
      
          if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
          } else {
            reveals[i].classList.remove("active");
          }
        }
      }
    React.useEffect(()=>{
      const cleanUp = ()=> window.removeEventListener('scroll', reveal);
        reveal();
        window.addEventListener('scroll', reveal);
        return cleanUp;
    }, []);
    return(
    <div>
        <Intro />
        <About />
        <Contact />
    </div>);
}
export default Landing;