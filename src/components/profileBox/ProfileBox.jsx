import './profileBoxStyles.css'
import React from 'react';

function ProfileBox(){

    const handleCloseHoverIn = (event)=> event.target.src = 'images/close_hover.png'; 
    const handleCloseHoverOut = (event)=> event.target.src = 'images/close.png'; 

    React.useEffect(()=>{
        const closeButton = document.getElementById('close');
        const profileBox = document.getElementById('profile_box');
        const profileImg = document.getElementById('profileImg');

        const handleCloseClick = (event)=>{
            profileBox.style.visibility = 'hidden';
            profileImg.classList.remove('glow');
        };

        closeButton.addEventListener('mouseover', handleCloseHoverIn);
        closeButton.addEventListener('mouseout', handleCloseHoverOut);
        closeButton.addEventListener('click', handleCloseClick);
    });

    return(
        <div id="profile_box">
            <img src='images/close.png' className='closeBtn' id='close' alt='close' />
            <img src="images/profile.png" className="user_box_img" alt='profile' />
            <hr />
            <form>
                <label htmlFor="emailInput">Email:</label>
                <input type='email' id='emailInput' placeholder="example@domain.com"></input><br />
                <label htmlFor="passInput">Password:</label>
                <input type='password' id='passInput' placeholder='*********'></input>
                <input className='loginBtn' type='submit' value='Login'></input>
            </form>
            <p>Don't have an account ?<br />
            click <a href='/#'>here</a> to register</p>
        </div>
    );
}

export default ProfileBox;