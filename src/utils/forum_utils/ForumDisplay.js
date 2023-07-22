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

export {getCategories, getSubCategories}