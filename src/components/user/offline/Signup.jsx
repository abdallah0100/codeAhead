import { Button, Form } from 'react-bootstrap';
import {send_Register} from '../../../utils/user_utils/RequestHandler';
import './offlineDesign.css'
function Signup(props){

    const handleRegister = (e)=> {
        e.preventDefault();
        send_Register(props.updateErrorMsg);
    };

    return (
        <>
            <Form>
                <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control type='text' placeholder='Abdallah0100' id='reg_username' required />
                    <Form.Text className='text-muted'>This will be the name You're known as.</Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type='email' placeholder='example@domain.com' id='reg_email' required />
                    <Form.Label>Confirm email</Form.Label>
                    <Form.Control type='email' placeholder='example@domain.com' id='reg_c_email' required />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' placeholder='*********' id='reg_pass' required />
                    <Form.Label>Confirm password</Form.Label>
                    <Form.Control type='password' placeholder='*********' id='reg_c_pass' required />
                </Form.Group>
                <Form.Group className='userPanel_buttons'>
                    <Button type='submit' id='register_submit' variant='success' onClick={handleRegister} >Submit</Button>
                    <Button id='userPanel_cancel' variant='secondary' onClick={props.handleHideModal} >Cancel</Button>
                </Form.Group>
            </Form>
        </>
    );
}

export default Signup;