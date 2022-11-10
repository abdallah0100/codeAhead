import './home/homeStyles.css';
import About from './home/About';
import Intro from './home/Intro';
import Contact from './home/Contact';
function Landing(){
    return(
    <div>
        <Intro />
        <About />
        <Contact />
    </div>);
}
export default Landing;