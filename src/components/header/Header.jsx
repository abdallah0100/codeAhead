import Logo from "./Logo";
import './headerDesign.css';
function Header(){
    return(
        <div className="header-container">
            <header>
                <Logo />
                <img src="/images/profile.png" alt="Profile Icon" className="profilePic"/>
            </header>
        </div>
    )
}

export default Header;