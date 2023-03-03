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
                This will be the profile body!!

                <div className="profile_menu_footer">
                    <hr />
                    <Button variant="danger" className="Profile_menu_logout" onClick={handleLogout} >Logout</Button>
                </div>
                
            </Offcanvas.Body>
        </Offcanvas>
    </>
}

export default ProfileMenu;