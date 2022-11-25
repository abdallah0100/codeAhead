function handleUserHeader(id, updateContent){
    const regBtn = document.getElementById('regBtn');
    const loginBtn = document.getElementById('login');
    const activeLogin = id=== 'login';

    if (activeLogin){
        loginBtn.classList.add('user_active_header');
        regBtn.classList.remove('user_active_header');
        updateContent(true);
    }else{
        regBtn.classList.add('user_active_header');
        loginBtn.classList.remove('user_active_header');
        updateContent(false);
    }
}
// eslint-disable-next-line
export default {handleUserHeader: handleUserHeader};