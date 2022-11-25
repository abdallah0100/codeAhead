import './main.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header'
import ProfileBox from './components/user/profileBox/ProfileBox'
import Router from './components/Router';
import React from 'react';
import CoreUtils from './utils/CoreUtils'

function App() {
React.useEffect(()=>{
  const reveal = CoreUtils.reveal;
  const cleanUp = ()=> window.removeEventListener('scroll', reveal);
  reveal();
  window.addEventListener('scroll', reveal);
  return cleanUp;
}, []);
  return (
    <div id='container'>
      <Header />
      <div id='content'>
        <ProfileBox />
        <Router />
      </div>
      <Footer />
    </div>
  );
}

export default App;