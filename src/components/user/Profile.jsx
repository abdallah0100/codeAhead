import React from "react";
import { Modal, Tabs, Tab } from "react-bootstrap";
import Signup from './offline/Signup';
import Login from './offline/Login';
import ProfileMenu from "./online/ProfileMenu";
import UserAssistant from "../../utils/user_utils/UserAssistant";

import './profileStyles.css';

function Profile(){

    const [showModal, updateModalState] = React.useState(false);
    const [errorMsg, updateErrorMsg] = React.useState(true);

    const [showProfile, setShowProfile] = React.useState(false);

    const handleHideModal = ()=> {
        updateErrorMsg(true);
        updateModalState(false);
        setShowProfile(false);
    };
    const handleShowModal = (e)=> {
        updateModalState(true)
        setShowProfile(false);
    };

    const handleShowProfileMenu = (e)=>{
        updateModalState(false);
        setShowProfile(true);
    }

    const handleProfileClick = (e)=> UserAssistant.isLoggedIn()? handleShowProfileMenu(e) : handleShowModal(e);

    React.useEffect(()=>{
        const profileIcon = document.getElementById("profileIcon");
        profileIcon.addEventListener('click', handleProfileClick);
    }, []);

    return(
        <>
            <img src='/images/user/profile.png' alt='profile icon' id="profileIcon" />
            <Modal show={showModal} onHide={handleHideModal} >
                <Modal.Header closeButton>
                    <Modal.Title>User Panel</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Tabs defaultActiveKey='login' className='mb-3 flex-row' justify>
                        <Tab eventKey="login" title='Login'>
                            <Login handleHideModal={handleHideModal} updateErrorMsg={updateErrorMsg} />
                        </Tab>
                        <Tab eventKey='register' title="Register">
                            <Signup handleHideModal={handleHideModal} updateErrorMsg={updateErrorMsg} />
                        </Tab>
                    </Tabs>
                </Modal.Body>
                <Modal.Footer>
                    <Modal.Dialog hidden={errorMsg} className="error_msg"><p id="error_text">Error Msg</p></Modal.Dialog>
                </Modal.Footer>
            </Modal>

            <ProfileMenu show={showProfile} setShowProfile={setShowProfile} />
        </>
    );
}

export default Profile;