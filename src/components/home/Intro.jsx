function Intro(){
    return(
    <div className="content_block" id="home">
        <p className="welcome_msg">Welcome to <label className="website_name">CodeAhead</label>, <br />
        We're excited for you to join our<br />
        community of developers.</p>
        <button className="joinUs_btn">Join us now!</button>
        <p className="welcome_msg register_msg">Already registered? click <a href="/#">here</a> to log in</p>

    </div>);
}

export default Intro;