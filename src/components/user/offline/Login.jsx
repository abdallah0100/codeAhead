import { Button, Form } from "react-bootstrap";
import { send_Login } from "../../../utils/user_utils/RequestHandler";

function Login(props){
    const handleLogin = (e)=>{
        e.preventDefault();
        send_Login(props.updateErrorMsg);
    };
    return (
        <>
            <Form>
                <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control id="login_username" type='text' required/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control id="login_pass" type='password' required />
                </Form.Group>
                <Form.Group className="userPanel_buttons">
                    <Button type="submit" variant='success' id="login_button" onClick={handleLogin}>Login</Button>
                    <Button variant='secondary' onClick={props.handleHideModal} >Cancel</Button>
                </Form.Group>
                <Form.Group className="p-2">
                    <Form.Text>Forgot Your password? click <a href="/account_recovery">here</a> to recover it</Form.Text>
                </Form.Group>
            </Form>
        </>
    );
}

export default Login;