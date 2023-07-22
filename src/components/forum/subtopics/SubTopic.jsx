import React from "react";
import { getSubCategories } from "../../../utils/forum_utils/ForumDisplay";
import { Row } from "react-bootstrap";
import "./SubTopicDesign.css"


function SubTopic(props){
    const [subCats, updateSubCats] = React.useState([]);

    React.useEffect(()=>{
        getSubCategories({catId: props.catId, updateSubs: updateSubCats});
    }, []);

    return (<>
            {subCats.map(sub=> 
                <Row className="subTopic" key={sub.name}><a href="/forum/#">{sub.name}</a></Row>)}
        </>
        );
}

export default SubTopic;