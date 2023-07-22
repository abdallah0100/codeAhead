import { Container, Row } from "react-bootstrap";
import React from "react";
import {getCategories} from "../../utils/forum_utils/ForumDisplay";
import SubTopic from "./subtopics/SubTopic";
import "./forumStyle.css"

function Index(){

    const [errorDisplayer, updateErrorDisplayer] = React.useState(true);
    const [data, updateData] = React.useState([]);
    
    React.useEffect(()=>{
        getCategories({updateError: updateErrorDisplayer, setData: updateData});
    }, []);

    return (
        <Container className="forum_Container" fluid='true'>
            <Row className="ThickBorder" fluid='md'><center><h3>Forum</h3></center></Row>
            <div hidden={!errorDisplayer}>
                <Row><center><h1 style={{color: '#DC3545'}}>!An error occured while fetching forum data!</h1></center></Row>
            </div>
            <div hidden={errorDisplayer}>
                {data.map(category =>
                    <Row className="ThickBorder category" key={category.id}><h4>{category.name}</h4><h6>{category.description}</h6><hr />
                        <SubTopic catId={category.id} />
                    </Row>
                    )}
            </div>       
        </Container>
    );
}

export default Index;