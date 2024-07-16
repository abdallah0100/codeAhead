import { Container, Row } from 'react-bootstrap';
import './footer.css';
function Footer(){
    return(
        <Container fluid='true' className='footer_container p-3'>
            <Row>
                <h3 className='mb-1 logo'>CodeAhead</h3>
            </Row>
            <Row>
                <p className='visit_label'>Visit us at:</p>
                <div className='social_icons'>           
                    <img className='twitter' src='/images/footer/twitter.jpg' alt='twitter icon' />
                    <img className='instagram' src='/images/footer/Instagram-Icon.png' alt='Instagram icon' />
                    <img className='facebook' src='/images/footer/facebook.png' alt='FB icon' />
                    <a target='_blank' href="https://www.linkedin.com/in/abdallah-aburomi/">
                        <img className='linkedin' src='/images/footer/LinkedIn_icon.png' alt='LinkedIn icon' />
                    </a>
                    </div>
            </Row>
            <hr />
            <Row><p>© 2022 CodeAhead - <a href="#author" rel="LinkedIn">Abdallah Aburomi</a><br />Contact us: info@codeahead.com</p></Row>
        </Container>
    );
}

export default Footer;