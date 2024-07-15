import React from "react";
import { getCatNameById } from "../../../../utils/forum_utils/ForumDisplay";
import createPost from "../../../../utils/forum_utils/ForumUtils";
import { Container, Form, FloatingLabel, Button, Modal } from "react-bootstrap";
import "./ThreadStyle.css"

function CreateThread(){

    const [catName, updateCatName] = React.useState("");
    const [showCancel, toggleCancel] = React.useState(false);

    const hideModal = ()=> toggleCancel(false);
    const showModal = ()=> toggleCancel(true);

    const confirmCancel = ()=> window.location.href = "/forum"
    const createClick = (e) => {
        e.preventDefault();
        createPost();
    };

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
                    <Form.Control type="text" style={{width: '15rem'}} id='threadTitle' />
                    <Form.Text className='text-muted'>Set a title to your thread</Form.Text>
                </center>
            </Form.Group>
            <Form.Group>
                <br />
                <center>
                    <Form.Label>Thread content</Form.Label>
                    <FloatingLabel label="" className="mb-3 contact_msg" controlId="threadContent">
                    <Form.Control as="textarea" style={{width: '45rem'}} placeholder="message content" required />
                    </FloatingLabel>
                </center>
            </Form.Group>
            <Form.Group className="threadBtns" style={{padding:'1rem'}}>
                <Button type='submit' variant='success' style={{marginRight: '3rem'}} onClick={createClick} >Create</Button>
                <Button variant="danger" onClick={showModal} >Cancel</Button>
            </Form.Group>
        </Form>

        <Modal show={showCancel} onHide={hideModal}>
            <Modal.Header closeButton>
                <Modal.Title><center>Are You sure you wish to cancel ?</center></Modal.Title>
            </Modal.Header>
            <Modal.Body><center>This action can not be undone!</center></Modal.Body>
            <Modal.Footer className="modal_buttons">
                <Button variant="danger" onClick={confirmCancel}>Confirm</Button>
                <Button variant="secondary" onClick={hideModal}>Cancel</Button>
            </Modal.Footer>
        </Modal>

    </Container>);
}

export default CreateThread;