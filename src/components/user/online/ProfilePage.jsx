import React from "react";
import { Card, Button } from "react-bootstrap";
import './onlineStyles.css';

function ProfilePage(){
    React.useEffect(()=>{
        document.getElementById('u_name').textContent = localStorage.getItem("name");
    }, []);
    return (
    <Card id="profileCard">
        <Card.Body>
            <img src="/images/user/profile_temp_bg.jpg" alt="user_bg" id="user_wallpaper" />
            <img src="/images/user/profile.png" alt="user_profile_pic" id="user_profile_pic"/>
            <label id="u_name"></label><br />
            <hr />
            <Button variant='secondary' className="float-end" style={{margin: '-7rem 0 0 0'}}>Edit Profile</Button>

            <Card style={{ width: '30rem', margin: '2rem 0 0 0' }}>
                <Card.Header><q><b>About</b></q></Card.Header>
                <Card.Body>
                    Introduce yourself, add a slogan or anything to tell others about yourself.
                </Card.Body>
            </Card>
        </Card.Body>
    </Card>
    )

}

export default ProfilePage;