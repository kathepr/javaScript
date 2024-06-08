import {getPost} from "./posts.js";
export const getAllComments = async () => {
    let res = await fetch("http://172.16.101.146:5801/comments");
    let data = await res.json();
    return data;
};

const validateAddComments = async ({ postId, name, email, body }) => {
    if (typeof name !== "string" || name === undefined) return { status: 406, message: `The data for ${name} is either not arriving or does not comply with the required format.` }
    if (typeof email !== "string" || email === undefined) return { status: 406, message: `The data for ${email} is either not arriving or does not comply with the required format.` }
    if (typeof body !== "string" || body === undefined) return { status: 406, message: `The data for ${body} is either not arriving or does not comply with the required format.` }
    let user = await getPost({ postId })
    if (user.status == 204) return { status: 200, message: `Post doesn't exist` }
}

export const addComments = async (arg) => {
    let val = await validateAddComments(arg);
    if (val) return val;
    let config = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(arg)
    };
    let res = await fetch("http://172.16.101.146:5801/comments", config);
    let data = await res.json();
    return data;
};

export const updateComments = async (arg) => {
    let val = await validateAddComments(arg);
    if (val) return val;
    let {id} = arg
    let config = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(arg)
    };
    let res = await fetch(`http://172.16.101.146:5801/comments/${id}`, config);
    let data = await res.json();
    return data;
}

export const patchComments = async (arg) => {
    let {id} = arg;
    let config = {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(arg)
    };
    let res = await fetch(`http://172.16.101.146:5801/comments/${id}`, config);
    let data = await res.json();
    return data;
}

export const deleteComments  = async(commentsId)=>{
    let config = {  
      method: "DELETE"
    };
    let res = await fetch(`http://172.16.101.146:5801/comments/${commentsId}`, config);
    if(res.status ===404) return {status: 204, message:"The comment ID does not exist or is in an unaccepted format."}
    let data = await res.json();
    data.status = 202;
    data.message =`The comment with ID ${commentsId} has been deleted from the database.`
    return data;
  }