import { Container } from 'react-bootstrap';
import About from './home/About';
import Intro from './home/Intro';
import './home/homeStyles.css'
import Contact from './home/Contact';

function Landing(){
    return(
        <Container fluid='true' className='landing_container'>
            <Intro />
            <About />
            <Contact />
        </Container>
    );
}
export default Landing;