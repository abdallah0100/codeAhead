import React from "react";
import { Button, Container, FloatingLabel, Form } from "react-bootstrap";

function Contact(){
    const [hideOther, updateOther] = React.useState(true);
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
                    <Form.Control type="text" placeholder="Full Name" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="example@domain.com" />
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
                    <Button variant='success' id='contact_send'>Send</Button>
                    <Button variant='secondary'>Reset</Button>
                </Form.Group>
            </Form>

        </Container>
    );
}

export default Contact;