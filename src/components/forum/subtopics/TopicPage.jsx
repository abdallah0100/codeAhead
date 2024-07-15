import React from "react";
import { Container, Row, Button } from "react-bootstrap";
import { getCatNameById, getThreadsById } from "../../../utils/forum_utils/ForumDisplay";
import "./SubTopicDesign.css";

function TopicPage(){

    const [catName, updateCatName] = React.useState("");
    const [threads, updateThreads] = React.useState([]);

    React.useEffect(()=>{
        const queryParameters = new URLSearchParams(window.location.search);
        const topicId = queryParameters.get("id");
        getCatNameById({id: topicId, updateName: updateCatName});
        getThreadsById({id: topicId, updateData: updateThreads});
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
                <br /><br />
                {threads.map(thread =>
                    <Row className="thread" key={thread.threadid + thread.title}><a href={"/forum/topic/thread?id="+thread.threadid}>{thread.title}</a><h6>Started By: {thread.username}</h6> <hr /></Row>)}
            </Container>
        );
}

export default TopicPage;