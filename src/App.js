import './main.css';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header'
import Router from './components/Router';
import React from 'react';
import { Container } from 'react-bootstrap';
import CoreUtils from './utils/CoreUtils';

function App() {
  
  React.useEffect(()=>{
    const reveal = CoreUtils.reveal;
    const cleanUp = ()=> window.removeEventListener('scroll', reveal);
    reveal();
    window.addEventListener('scroll', reveal);
    return cleanUp;
  }, []);

  return (
    <Container fluid="true" className='main_container'>
      <Header />
      <Container className='content_section' fluid='true'>
        <Router />
      </Container>
      <Footer />
    </Container>
  );
}

export default App;