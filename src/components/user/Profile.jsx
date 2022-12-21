import React from "react";
import { Modal, Tabs, Tab } from "react-bootstrap";
import Signup from './offline/Signup';
import Login from './offline/Login';
import './profileStyles.css';

function Profile(){

    const [showModal, updateModalState] = React.useState(false);
    const [errorMsg, updateErrorMsg] = React.useState(true);

    const handleHideModal = ()=> {
        updateErrorMsg(true);
        updateModalState(false);
    };
    const handleShowModal = (e)=> updateModalState(true);

    React.useEffect(()=>{
        const profileIcon = document.getElementById("profileIcon");
        profileIcon.addEventListener('click', handleShowModal);
    }, []);

    return(
        <>
            <img src='/images/profile.png' alt='profile icon' id="profileIcon" />
            <Modal show={showModal} onHide={handleHideModal} className='' >
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
        </>
    );
}

export default Profile;