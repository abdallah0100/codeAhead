import React from "react";
import { Container, Row, Button } from "react-bootstrap";
import { getCatNameById } from "../../../utils/forum_utils/ForumDisplay";
import "./SubTopicDesign.css";

function TopicPage(){

    const [catName, updateCatName] = React.useState("");

    React.useEffect(()=>{
        const queryParameters = new URLSearchParams(window.location.search);
        const topicId = queryParameters.get("id");
        getCatNameById({id: topicId, updateName: updateCatName});
    }, []);

    const newThread = ()=>{
        const queryParameters = new URLSearchParams(window.location.search);
        const topicId = queryParameters.get("id");
        window.location.href = "/forum/topic/create?cat="+topicId;
    };

    return(
            <Container fluid='true' className="forum_Container catContainer">
                <Row className="ThickBorder"><center><h3>{catName}</h3></center>
                </Row>
                <Button id="newThreadBtn" onClick={newThread}>New thread</Button>

            </Container>
        );
}

export default TopicPage;