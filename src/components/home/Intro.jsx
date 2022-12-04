import { Container, Button } from 'react-bootstrap';
function Intro(){   
    return(
        <Container className='intro_container landing_content' fluid="true" id='home'>
            <p>Welcome to <label className='logo'>CodeAhead</label>, <br />
            We're excited for you to join our<br />
            community of developers.</p>
            <Button>Join us now!</Button>
            <p>Already registered? click <a href="/#">here</a> to log in</p>
        </Container>
);
}

export default Intro;