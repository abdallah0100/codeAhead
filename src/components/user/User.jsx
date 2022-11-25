import React from 'react';
import './User.css'
import Register from './Register';
import LogIn from './LogIn';
import userUtils from '../../utils/user_utils/userUtils';

function User(){
    const [loginContent, updateContent] = React.useState(window.location.search === '?login');
    const handleClick = (event)=> userUtils.handleUserHeader(event.target.id, updateContent);

    React.useEffect(()=>{
        document.getElementById('regBtn').addEventListener('click', handleClick);
        document.getElementById('login').addEventListener('click', handleClick);
        userUtils.handleUserHeader(window.location.search.substring(1), updateContent);
    }, []);

    return(
        <div className='content_block'>
            <div className='user_header'>
                <div><label id='regBtn'>Register</label></div>
                <div><label id='login'>Login</label></div>
            </div>
            <div className='user_content'>
                {loginContent? <LogIn />: <Register />}
            </div>
        </div>
    );
}

export default User;