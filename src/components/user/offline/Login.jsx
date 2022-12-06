import { Button, Form } from "react-bootstrap";

function Login(props){
    return (
        <>
            <Form>
                <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control type='text' required/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' required />
                </Form.Group>
                <Form.Group className="userPanel_buttons">
                    <Button type="submit" variant='success' id="login_button">Login</Button>
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