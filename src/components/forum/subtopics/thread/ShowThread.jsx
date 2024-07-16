import React from "react";

import "./ThreadStyle.css"
import { Container } from "react-bootstrap";
import { getThreadDataById } from "../../../../utils/forum_utils/ForumDisplay";

function ShowThread(){

    const [thread, setThread] = React.useState(0);

    React.useEffect(()=>{
        const queryParameters = new URLSearchParams(window.location.search);
        const threadId = queryParameters.get("id");

        getThreadDataById({id: threadId, setThreadData: setThread})

    }, []);

    return(<Container className="formContainer" fluid>
        {thread.length > 0 && (  // Check if thread has elements
            <>
                <h2>Thread Title: {thread[0].title}</h2>
                <br /><br />
                <h2>Content</h2>
                <p>{thread[0].content}</p>
            </>
        )}
        {thread.length === 0 && (  // Handle case where thread is empty
            <p>Loading thread...</p>
        )}
    </Container>);
}

export default ShowThread;