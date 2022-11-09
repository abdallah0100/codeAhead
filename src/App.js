import './main.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header'
import Landing from './components/Landing';
import ProfileBox from './components/profileBox/ProfileBox'
function App() {
  return (
    <div id='container'>
      <Header />
      <div id='content'>
        <ProfileBox />
        <Landing />
      </div>
      <Footer />
    </div>
  );
}

export default App;
