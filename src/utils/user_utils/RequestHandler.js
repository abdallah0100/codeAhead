import UserAssistant from "./UserAssistant";
import axios from "axios";


function send_Register(updateErrorMsg){
    const validation = UserAssistant.validateData();
    const errorMsg = document.getElementById('error_text');
    if (validation.resultCode !== 0){
        errorMsg.textContent = validation.msg;
        updateErrorMsg(false);
    }else{
        const inputs = UserAssistant.getRegisterData();
        const d = new Date();
        let date = d.getDate() + "-"+(d.getMonth()+1)+"-"+d.getFullYear();
        const data = {username: inputs.userName, email: inputs.email, password: inputs.pass, date: date};

        axios.post("http://localhost:4000/api/register", data).then(result=>{
            console.log(result.statusText);
        }).catch(err=> {
            errorMsg.textContent = err.response.data.msg;
            updateErrorMsg(false);
        });
    }
}

function send_Login(updateErrorMsg){
    const user = document.getElementById('login_username').value;
    const password = document.getElementById('login_pass').value;
    const data = {username: user, password: password};

    axios.post("http://localhost:4000/api/login", data).then(result =>
    console.log(result)).catch(err=>{
        document.getElementById('error_text').textContent = "* Invalid username or password.";
        updateErrorMsg(false);
    })
}

export {send_Register, send_Login};