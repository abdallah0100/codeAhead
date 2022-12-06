import { Button, Form } from 'react-bootstrap';
import './offlineDesign.css'
function Signup(props){
    return (
        <>
            <Form>
                <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control type='text' placeholder='Abdallah0100' required />
                    <Form.Text className='text-muted'>This will be the name You're known as.</Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type='email' placeholder='example@domain.com' required />
                    <Form.Label>Confirm email</Form.Label>
                    <Form.Control type='email' placeholder='example@domain.com' required />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' placeholder='*********' required />
                    <Form.Label>Confirm password</Form.Label>
                    <Form.Control type='password' placeholder='*********' required />
                </Form.Group>
                <Form.Group className='userPanel_buttons'>
                    <Button type='submit' id='register_submit' variant='success'>Submit</Button>
                    <Button id='userPanel_cancel' variant='secondary' onClick={props.handleHideModal} >Cancel</Button>
                </Form.Group>
            </Form>
        </>
    );
}

export default Signup;