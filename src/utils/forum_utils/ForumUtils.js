import axios from "axios";

function getThreadData() {
    const title = document.getElementById('threadTitle').value;
    const content = document.getElementById('threadContent').value;
    const author = window.localStorage.getItem('name');
    
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('cat');
   return { title: title, content: content, author: author, category: category};
}

function createPost(){
    const data = getThreadData();

    axios.post("http://localhost:4000/api/create_post", data).then(result => {
        alert("Post has been created.");
        window.location = "/forum";
    }).catch(err => {
        console.log(err)
        alert("An error occured")

});

}

export default createPost;