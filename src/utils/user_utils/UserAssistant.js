function getRegisterData(){
    const user = document.getElementById('reg_username').value;
    const email = document.getElementById('reg_email').value;
    const confirm_email = document.getElementById('reg_c_email').value;
    const pass = document.getElementById('reg_pass').value;
    const confirm_pass = document.getElementById('reg_c_pass').value;

    return {userName: user,
        email: email, confirm_email: confirm_email,
        pass: pass, confirm_pass: confirm_pass};
}

function validateData(){
    const data = getRegisterData();
    const result = {resultCode: 0, msg: ""};
    const password_expression = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,14}$/;
    // eslint-disable-next-line
    if (data.email != data.confirm_email){
        result.resultCode = 1;
        result.msg = "* The email addresses that you entered do not match.";
    }else if (data.pass !== data.confirm_pass){
        result.resultCode = 1;
        result.msg = "* The passwords you entered do not match";
    }else if (!data.pass.match(password_expression)){
        result.resultCode = 1;
        result.msg = "* Password must contain at least one digit, one upppercase and lower case letters and be in range of 8-14";
    }
    return result;
}
// eslint-disable-next-line
export default {validateData, getRegisterData};