import './headerDesign.css';
import React from 'react';
import Logo from "./Logo";
import NavBar from './navbar/NavBar';
function Header(){

    React.useEffect(()=>{
        const profileBox = document.getElementById('profile_box');
        const profile = document.getElementById('profileImg');

        const handleProfileClick = (event)=>{
            event.target.classList.add('glow');
            profileBox.style.visibility = 'visible';
        };

        profile.addEventListener('click', handleProfileClick);
    });

    return(
        <header>
            <Logo />
            <NavBar />
            <img src="/images/profile.png" alt="Profile Icon" className="profilePic" id='profileImg' />
        </header>
    )
}

export default Header;