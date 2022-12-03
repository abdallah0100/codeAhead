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
                    </div>
            </Row>
            <hr />
            <Row><p>© 2022 CodeAhead<br />Contact us: info@codeahead.com</p></Row>
        </Container>
    );
}

export default Footer;