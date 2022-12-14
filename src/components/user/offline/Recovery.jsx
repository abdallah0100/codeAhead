import { Form, Container, Button } from "react-bootstrap";
import { useState } from "react";
import './offlineDesign.css';

function Recovery(){

    const [currentStep, updateStep] = useState(0);
    const handleContinue = (e)=>{
        let step = e.target.id === 'recover_continue1' ? 1: 2;
        updateStep(step); 
    };
    const showStep = (step)=>{return step === currentStep};
    return(
        <Container className="recovery_container">
            <h1>Account Recovery</h1>
            
            <Form>
                <Form.Text>Fill in the information below to continue.</Form.Text>
                <Form.Group hidden={!showStep(0)}>
                    <Form.Label>Enter your username</Form.Label>
                    <Form.Control type="text" placeholder="username" name="recover_name" required />

                    <Form.Group className='userPanel_buttons'>
                        <Button variant='success' id="recover_continue1" onClick={handleContinue}>Continue</Button>
                    </Form.Group>                
                </Form.Group>
                <Form.Group hidden={!showStep(1)}>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type='email' placeholder='example@domain.com' name="recover_email" required />
                    <Form.Label>Confirm email</Form.Label>
                    <Form.Control type='email' placeholder='example@domain.com' name="recover_c_email" required />
                
                    <Form.Group className='userPanel_buttons'>
                        <Button variant='success' id="recover_continue2" onClick={handleContinue}>Continue</Button>
                    </Form.Group>
                </Form.Group>
                <Form.Group hidden={!showStep(2)}>
                    <h3>Enter a new password</h3>
                    <Form.Text>If the entered inftomation matches the stored data the password will be updated</Form.Text>
                    <br />
                    <Form.Label>New password</Form.Label>
                    <Form.Control type="new password" placeholder="********" />
                    <Form.Label>Confirm new password</Form.Label>
                    <Form.Control type="confirm new password" placeholder="********" />
                    <Form.Group className='userPanel_buttons'>
                        <Button variant='success'>Update</Button>
                    </Form.Group>
                </Form.Group>
            </Form>
        </Container>
    );
}

export default Recovery;