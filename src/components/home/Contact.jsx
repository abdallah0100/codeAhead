import React from "react";
import { Button, Container, FloatingLabel, Form, Modal } from "react-bootstrap";
import contactScripts from '../../utils/contactScripts';

function Contact(){
    const [hideOther, updateOther] = React.useState(true);
    const [modalState, toggleShowModal] = React.useState(false);

    const hideModal = ()=> toggleShowModal(false);
    const showModal = ()=> toggleShowModal(true);

    const handleModalConfirm = ()=>{
        contactScripts.reset();
        hideModal();
    };

    const handleRadioChange = (e)=> {
        const other = document.getElementById("other_topic");
        updateOther(!other.checked);
    };

    return(
        <Container className="landing_content contact_container" id="contact">
            <h2>Contact Us</h2>
            <center><h5>We are pleased to hear from You regarding any matter!</h5></center>
            <Form>
                <Form.Group>
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control id='contact_fname' type="text" placeholder="Full Name" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control id='contact_email' type="email" placeholder="example@domain.com" />
                </Form.Group>
                <Form.Group onChange={handleRadioChange}><br />
                    <Form.Label>Topic</Form.Label><br />
                    <Form.Check type="radio" label="suggestion" name="contact_topic" inline />
                    <Form.Check type="radio" label="Report a bug" name="contact_topic" inline />
                    <Form.Check type="radio" label="Business" name="contact_topic" inline />
                    <Form.Check type="radio" label="other" name="contact_topic" id="other_topic" inline />
                    <Form.Control type="text" id='other_text' placeholder="Topic specification" hidden={hideOther} />
                </Form.Group><br /><br />
                <FloatingLabel label="Contact message" className="mb-3 contact_msg" controlId="messageContent">
                    <Form.Control as="textarea" placeholder="message content" />
                </FloatingLabel>
                <Form.Group className="contact_buttons">
                    <Button type='submit' variant='success' id='contact_send'>Send</Button>
                    <Button variant='secondary' onClick={showModal} >Reset</Button>
                </Form.Group>
            </Form>

            <Modal show={modalState} onHide={hideModal} >
                <Modal.Header closeButton>
                    <Modal.Title>Are You sure you wish to reset ?</Modal.Title>
                </Modal.Header>
                <Modal.Body>This action can not be undone once confirmed</Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleModalConfirm}>Confirm</Button>
                    <Button variant="secondary" onClick={hideModal}>Cancel</Button>
                </Modal.Footer>
            </Modal>

        </Container>
    );
}

export default Contact;