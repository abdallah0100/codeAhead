import { Button, Container, FloatingLabel, Form } from "react-bootstrap";

function Contact(){

    return(
        <Container className="landing_content contact_container">
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
                <Form.Group><br />
                    <Form.Label>Topic</Form.Label><br />
                    <Form.Check type="radio" label="suggestion" name="contact_topic" inline />
                    <Form.Check type="radio" label="Report a bug" name="contact_topic" inline />
                    <Form.Check type="radio" label="Business" name="contact_topic" inline />
                    <Form.Check type="radio" label="other" name="contact_topic" inline />
                    <Form.Control type="text" id='other_text' />
                </Form.Group>
                <FloatingLabel label="Contact message" className="mb-3" controlId="messageContent">
                    <Form.Control as="textarea" rows={5} placeholder="message content" />
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