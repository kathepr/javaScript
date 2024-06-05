import { getUser } from "./users.js";

const validateAddTodos= async({userId, title, completed}) => {
    if(typeof userId !== "number" || userId === undefined) return {status: 406, message: `El dato ${userId} recibido no cumple con el tipo de dato ${typeof userId}.`};
    if(typeof title !== "string" || title === undefined) return {status: 406, message: `El dato ${title} recibido no cumple con el tipo de dato ${typeof title}.`};
    if(typeof completed !== "boolean" || completed === undefined) return {status: 406, message: `El dato ${completed} recibido no cumple con el tipo de dato ${typeof completed}.`};
    let user = await (getUser({userId}));
    if(user.status == 204) return {status: 200, message: `Username does not exist`}
  
}


export const addTodos = async(arg) => {
    let val = await validateAddTodos(arg);
    if(val) return val;

    const config = {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(arg)
    }

    let res = await fetch("https://jsonplaceholder.typicode.com/todos", config)
    let data = await res.json();
    return data
}
