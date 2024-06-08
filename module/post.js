import { getUser } from "./users.js";
export const getAllPosts = async () => {
    let res = await fetch("http://172.16.101.146:5800/posts");
    let data = await res.json();
    return data;
};


const validateAddPost = async ({userId, title, body}) => {
    if (typeof title !== "string" || title === undefined) return { status: 406, message: `The data for ${title} is either not arriving or does not comply with the required format.` }
    if (typeof body !== "string" || body === undefined) return { status: 406, message: ` The data for ${body} is either not arriving or does not comply with the required format.` }
    let user = await getUser({ userId })
    if (user.status == 204) return { status: 200, message: `Username does not exist` }
}

const validateGetPost = async ({postId}) => {
    if (typeof postId !== "string" || postId === undefined) return { status: 406, message: `The data for ${postId} is either not arriving or does not comply with the required format.` }
}

export const getPost = async (arg) => {
    let val = await validateGetPost(arg);
    if (val) return val;
    let res = await fetch(`http://172.16.101.146:5800/posts/${arg.postId}`);
    if (res.status === 404) return { status: 204, message: `Username does not exist` }
    let data = await res.json();
    return data;
};
export const addPost = async (arg) => {
    let val = await validateAddPost(arg);
    if (val) return val;
    let config = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(arg)
    };
    let res = await fetch("http://172.16.101.146:5800/posts", config);
    let data = await res.json();
    return data;
};

export const updatePost = async (id,arg) => {
    let val = await validateAddPost(arg);
    if (val) return val;
    let config = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(arg)
    };
    let res = await fetch(`http://172.16.101.146:5800/posts/${id}`, config);
    let data = await res.json();
    return data;
}

export const patchPost = async (id,arg) => {
    let config = {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(arg)
    };
    let res = await fetch(`http://172.16.101.146:5800/posts/${id}`, config);
    let data = await res.json();
    return data;
}

export const deletePost = async (postId) => {
    let config = {
        method: "DELETE"
    };
    let res = await fetch(`http://172.16.101.146:5800/posts/${postId}`, config);
    if (res.status === 404) return { status: 204, message: "The Post ID does not exist or is in an unaccepted format."}
    let data = await res.json();
    data.status = 202;
    data.message = `The Post ${postId} has been deleted from the database`
    return data;
}