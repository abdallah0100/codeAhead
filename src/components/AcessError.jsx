import { Container, Button } from "react-bootstrap";

function AccessError(){
 
    const goBack = ()=>{
        window.location = "/";
    };

    return(<Container className="accessError">
        <center style={{margin: '5rem'}}>
            <h1 style={{color: '#DC3545'}}>Access Denied</h1>
            <form action="/#">
                <Button variant="danger" onClick={goBack}>Click here to go back</Button>
            </form>
        </center>
    </Container>);
}

export default AccessError;