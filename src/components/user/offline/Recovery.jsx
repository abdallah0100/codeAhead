import { Form, Container, Button } from "react-bootstrap";
import './offlineDesign.css';

function Recovery(){
    return(
        <Container className="recovery_container">
            <h1>Account Recovery</h1>
            <Form>
                <Form.Text>Fill in the information below to continue.</Form.Text>
                <Form.Group>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type='email' placeholder='example@domain.com'/>
                    <Form.Label>Confirm email</Form.Label>
                    <Form.Control type='email' placeholder='example@domain.com' />
                </Form.Group>
                <Form.Group className='userPanel_buttons'>
                    <Button type='submit' id='register_submit' variant='success'>Continue</Button>
                </Form.Group>
            </Form>
        </Container>
    );
}

export default Recovery;