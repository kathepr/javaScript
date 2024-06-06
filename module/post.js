import { getUser } from "./users.js";

export const getAllPosts = async() => {
    let res = await fetch("http://172.16.101.146:5800/posts");
    let data = await res.json();
    return data
}

const validateAddPost= async({userId, title, body}) => {
    if(typeof userId !== "string" || userId === undefined) return {status: 406, message: `El dato ${userId} recibido no cumple con el tipo de dato ${typeof userId}.`};
    if(typeof title !== "string" || title === undefined) return {status: 406, message: `El dato ${title} recibido no cumple con el tipo de dato ${typeof title}.`};
    if(typeof body !== "string" || body === undefined) return {status: 406, message: `El dato ${body} recibido no cumple con el tipo de dato ${typeof body}.`};
    let user = await (getUser({userId}));
    if(user.status == 204) return {status: 200, message: `Username does not exist`}
  
}


export const addPost = async(arg) => {
    let val = await validateAddPost(arg);
    if(val) return val;

    const config = {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(arg)
    }

    let res = await fetch("http://172.16.101.146:5800/posts", config)
    let data = await res.json();
    return data
}


const validateDeletePost = async ({id}) => {
    if (typeof id !== "string" || id === undefined) return {status: 406, message: "El id del usuario no cumple con el tipo de dato."};
}

export const deletePost = async (arg) => {
    let val = await validateDeletePost(arg);
    if (val) return val;
    
    let config = {
        method: "DELETE",
        headers: {"Content-Type": "application/json"},
    };
    
    let res = await fetch(`http://172.16.101.146:5800/users/${arg.id}`, config);
    if (res.status === 404) return {status: 204, message: "El usuario que desea eliminar no está registrado"};
    let data = await res.json();
    data.status = 202;
    data.message = `El usuario ${arg.id} fue eliminado de la base de datos`;
    return data;
}