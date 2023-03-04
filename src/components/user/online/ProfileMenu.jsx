import React from "react";
import { Offcanvas, Button } from "react-bootstrap";
import './onlineStyles.css';

function ProfileMenu(props){

    const handleClose = () => props.setShowProfile(false);
    const handleLogout = () => {
        localStorage.clear();
        window.location = "/";
    };

    return<>
        <Offcanvas show={props.show} backdrop={true} scroll={true} onHide={handleClose} placement='end' className="profileMenu h-auto" >
            <Offcanvas.Body>
                <img src='/images/user/profile.png' id="menu_profile_pic" alt="user_pic" />
                <hr />
                <img src="/images/user/profilePage.png" alt="profile_pg" className="profile_menu_icons" />
                <a href="#">Profile Page</a> <br /> <br />
                <img src="/images/user/profile_settings.png" alt="profile_pg" className="profile_menu_icons" />
                <a href="#">Settings</a>

                <div className="profile_menu_footer">
                    <hr />
                    <Button variant="danger" className="Profile_menu_logout" onClick={handleLogout} >Logout</Button>
                </div>
                
            </Offcanvas.Body>
        </Offcanvas>
    </>
}

export default ProfileMenu;