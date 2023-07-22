import React from "react";
import { getCatNameById } from "../../../../utils/forum_utils/ForumDisplay";
import { Container, Form, FloatingLabel, Button } from "react-bootstrap";
import "./ThreadStyle.css"

function CreateThread(){

    const [catName, updateCatName] = React.useState("");

    React.useEffect(()=>{
        const queryParameters = new URLSearchParams(window.location.search);
        const topicId = queryParameters.get("cat");
        getCatNameById({id: topicId, updateName: updateCatName});
    }, []);

    return(
    <Container className="formContainer" fluid='true'>
        <Form>
            <Form.Group>
                <Form.Label>Category: {catName}</Form.Label>
            </Form.Group>
            <Form.Group>
                <center>
                    <Form.Label>Thread Title</Form.Label>
                    <Form.Control type="text" style={{width: '15rem'}} />
                    <Form.Text className='text-muted'>Set a title to your thread</Form.Text>
                </center>
            </Form.Group>
            <Form.Group>
                <br />
                <center>
                    <Form.Label>Thread content</Form.Label>
                    <FloatingLabel label="Thread message" className="mb-3 contact_msg" controlId="messageContent">
                    <Form.Control as="textarea" style={{width: '45rem'}} placeholder="message content" required />
                    </FloatingLabel>
                </center>
            </Form.Group>
            <Form.Group className="threadBtns" style={{padding:'1rem'}}>
                <Button type='submit' variant='success' style={{marginRight: '3rem'}}>Create</Button>
                <Button variant="danger">Cancel</Button>
            </Form.Group>
        </Form>
    </Container>);
}

export default CreateThread;