import { getUser } from "./users.js";

const validateAddPost= async({userId, title, body}) => {
    if(typeof userId !== "number" || userId === undefined) return {status: 406, message: `El dato ${userId} recibido no cumple con el tipo de dato ${typeof userId}.`};
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

    let res = await fetch("https://jsonplaceholder.typicode.com/posts", config)
    let data = await res.json();
    return data
}
