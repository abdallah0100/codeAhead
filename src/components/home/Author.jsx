import { Container, Row, Col } from "react-bootstrap";
import './AuthorStyle.css';

function Author() {
    return (
        <Container className="formContainer" fluid>
            <Row>
                <Col md={4} className="text-center">
                    <img width='250' className="authorPic" src="https://avatars.githubusercontent.com/u/63150430?v=4.png" alt="Abdallah Aburomi" />
                </Col>
                <Col md={8}>
                    <h1>Abdallah Aburomi</h1>
                    <p>My name is Abdallah Aburomi, a Software Engineering student at Braude Academic College of Engineering.</p>
                    <h3>About Me</h3>
                    <p>
                        I am passionate about software development and constantly seek to learn and grow in the field. 
                        With a strong foundation in software engineering principles and hands-on experience in various <a target="_blank" rel="noopener noreferrer" href="https://github.com/abdallah0100/">projects</a>, 
                        I am eager to contribute to innovative and impactful software solutions.
                    </p>
                    <h3>Skills</h3>
                    <ul>
                        <li>Programming Languages: JavaScript, Python, Java and C</li>
                        <li>Web Development: HTML, CSS, React, Node.js</li>
                        <li>Database Management: MySQL, PostgreSQL</li>
                        <li>Version Control: Git, GitHub</li>
                    </ul>
                    <h3>Contact</h3>
                    <p>Email: abdla.aburomi@gmail.com</p>
                    <h3>Connect with Me</h3>
                    <p>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/abdallah-aburomi/">LinkedIn</a> | 
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/abdallah0100/">GitHub</a>
                    </p>
                </Col>
            </Row>
        </Container>
    );
}

export default Author;
