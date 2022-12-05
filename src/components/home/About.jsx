import { Card, Container } from "react-bootstrap";

function About(){
    return(
        <Container id='about' className="">
            <Card className="landing_content">
                <Card.Img src='images/landing/about.png' id="about_cardImg" alt='about bg' />
                <Card.ImgOverlay>
                    <Card.Title>About us</Card.Title>

                    <Card.Text><br /><br />
                    CodeAhead is a platform that is built to be a base for all developers of all levels, enabling them to connect to each other
                     in a mutual forum that is home for both experienced developers, juniors or even people that are intersted in this field alike.
                    </Card.Text>
                    <Card.Text>
                    Providing a forum that is built to share snippets of intersting plugins, get help to fix an error that you faced, show-off your accomplishments,
            share work experiences or even get services from other developers for a price that is supervised by designated members to maintain a fair trade,
            respecting the effort it takes to be accomplished and a reasonable price for the requester.
                    </Card.Text>
                    <Card.Text>
                    All of these are our contribution to get a thriving community of international developers that aims to share knowledge, learn from others and potentially
            a place to start your new business!
                    </Card.Text>
                </Card.ImgOverlay>
            </Card>
        </Container>
    );
}

export default About;