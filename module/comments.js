import {getPost} from "./posts.js";
export const getAllComments = async () => {
    let res = await fetch("http://172.16.101.146:5801/comments");
    let data = await res.json();
    return data;
};

export const getComment = async ({id}) => {

    let res = await fetch(`http://172.16.101.146:5801/comments${id}`);
    if (res.status === 404) return { status: 204, message: `Comment doesn't exist` }
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

const validateUpdateComments = async ({ postId, name, email, body }) => {
    let errors = {};

    if (name !== undefined) {
        if (typeof name !== "string") {
            errors.name = `The name is either not being received or does not comply with the required format.`;
        }
    }

    if (email !== undefined) {
        if (typeof email !== "string") {
            errors.email = `The email is either not being received or does not comply with the required format.`;
        }
    }

    if (body !== undefined) {
        if (typeof body !== "string") {
            errors.body = `The body is either not being received or does not comply with the required format.`;
        }
    }

    if (Object.keys(errors).length > 0) {
        return { status: 406, message: "Data Error", errors };
    }

    let user = await getPost({ postId })
    if (user.status == 204) {
        return { status: 200, message: `Post doesn't exist` }
    }
}

export const patchComments = async (arg) => {
    let val = await validateUpdateComments(arg);
    if (val) {
        if (val.status === 200) {
            return val;
        } else {
            return val;
        }
    }
    let { id } = arg;
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
    if(res.status ===404) return {status: 204, message:"The ID doesn't exist or is in an unaccepted format."}
    let data = await res.json();
    data.status = 202;
    data.message =`The comment with ID ${commentsId} has been deleted from the database.`
    return data;
  }