import axios from "axios";

function getCategories(args){
    axios.post("http://localhost:4000/api/fetchCategories").then(result => {
        if (result.data.length > 0){
            args.updateError(false);
            args.setData(result.data);
        }else{
            args.updateError(true);
        }
    }
    ).catch(err => err);
}

function getSubCategories(args){
    return axios.post("http://localhost:4000/api/fetchSubCategory", {parentId: args.catId}).then(result => {
        args.updateSubs(result.data);
    })
    .catch(err => err);
}

function getCatNameById(args){
    return axios.post("http://localhost:4000/api/fetchCatName", {id: args.id})
    .then(result=> {
        args.updateName(result.data.name);
    }).catch(err => err);
}

function getThreadsById(args){
    axios.post("http://localhost:4000/api/getThreads", { subcat: args.id })
    .then(result =>{ 
        console.log(result.data)
       args.updateData(result.data)
    }).catch(err => err);
}

function getThreadDataById(args){
    axios.post("http://localhost:4000/api/getThread", {threadId: args.id})
    .then(result => {
        console.log(result.data)
        args.setThreadData(result.data)
    }).catch(err => err)
}

export { getCategories, getSubCategories, getCatNameById, getThreadsById, getThreadDataById}