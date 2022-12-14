function resetInputs(){
    const fname = document.getElementById('contact_fname');
    const email = document.getElementById('contact_email');
    const topic_text = document.getElementById('other_text');
    const msg = document.getElementById('messageContent');

    fname.value = '';
    email.value = '';
    topic_text.value = '';
    msg.value = '';
}
// eslint-disable-next-line
export default {reset: resetInputs};