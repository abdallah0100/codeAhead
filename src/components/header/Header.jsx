import './headerDesign.css';
import Logo from "./Logo";
import NavBar from './navbar/NavBar';
function Header(){
    return(
        <header>
            <Logo />
            <NavBar />
            <img src="/images/profile.png" alt="Profile Icon" className="profilePic"/>
        </header>
    )
}

export default Header;