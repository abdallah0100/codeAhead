import './headerDesign.css';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
function Header(){

    return(
        <Navbar bg="dark" variant='dark' sticky='top'>
            <Navbar.Brand className='p-2' href='#home'>CodeAhead</Navbar.Brand>
            <Container fluid className='nav_container'>

                <Nav className='me-auto'>
                    <Nav.Link href='#about'>About</Nav.Link>
                    <Nav.Link href='#'>Forum</Nav.Link>
                    <Nav.Link href='#contact'>Contact</Nav.Link>
                </Nav>
                <img src='/images/profile.png' alt='profile icon' />
            </Container>
        </Navbar>
    )
}

export default Header;