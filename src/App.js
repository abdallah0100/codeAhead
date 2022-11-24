import './main.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header'
import ProfileBox from './components/user/profileBox/ProfileBox'
import Router from './components/Router';

function App() {
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
