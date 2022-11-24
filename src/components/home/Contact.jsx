function Contact(){

    const handleOtherSelect = (e)=>{
        document.getElementById('other_topic').style.visibility = e.target.id === 'other' ? 'visible' : 'hidden';
    }

    const handleSend = (e)=>{
        e.preventDefault();
    }

    return(
        <div className="content_block" id='contact'>
            <h1>Contact us</h1>
            <hr />
            <p>We are pleased to hear from You regarding any matter!</p>
            <form  onChange={handleOtherSelect}>
                <div className="contact_names">
                    <label>First Name:</label>
                    <input type='text' placeholder="Abdallah" className="text_input"></input>
                    <label>Last Name:</label>
                    <input type='text' placeholder="Aburomi" className="text_input"></input><br />
                </div>
                <label>Email:</label>
                <input type='email' placeholder='example@domain.com' className="text_input"></input><br />
                <label id="topics_title">Topic:</label>
                <input type='radio' value='Suggestion' id="suggestion" name="topics"></input>
                <label htmlFor="suggestion">Suggestion |</label>
                <input type='radio' value='Report' id="report" name="topics"></input>
                <label htmlFor="report">Report a bug |</label>
                <input type='radio' value='Business' id="business" name="topics"></input>
                <label htmlFor="business">Business |</label>
                <input type='radio' value='Other' id="other" name="topics"></input>
                <label htmlFor="other">Other</label>
                <div id="other_topic">
                    <label>Please specify the topic: </label>
                <input type='Text' id="report_text" placeholder="topic" className="text_input"></input>
                </div>

                <label htmlFor="contact_msg" id="contact_msg_label">Message:</label>
                <input type='text' placeholder="message..." className="text_input" id="contact_msg"></input><br />

                <input type='submit' value='Send' className="contact_submit" onClick={handleSend}></input>
            </form>

            <p>Or send us an e-mail at <a href="mailto:contact@codeahead.com">contact@codeahead.com</a>.</p>
        </div>
    );
}

export default Contact;