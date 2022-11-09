import './footer.css';
function Footer(){
    return(
        <div className="footer-container">
            <div className="socials">
                <h2>CodeAhead</h2>
                <label>Visit us at:</label> <br />
                <img src="/images/footer/twitter.jpg" alt='Twitter icon' id='twitter' />
                <img src="/images/footer/Instagram-Icon.png" alt='Instagram icon' id='instagram'/>
                <img src="/images/footer/facebook.png" alt='Facebook icon' id='facebook'/>
            </div>
            <hr />
            <div className='copyRights'>
                <i>
                    <p>© 2022 CodeAhead</p>
                    <p>Contact us: info@codeahead.com</p>
                </i>
            </div>
        </div>
    );
}

export default Footer;