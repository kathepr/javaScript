import { getUser } from "./users.js";

const validateAddTodos= async({userId, title, completed}) => {
    if(typeof userId !== "string" || userId === undefined) return {status: 406, message: `El dato ${userId} recibido no cumple con el tipo de dato ${typeof userId}.`};
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

    let res = await fetch("http://172.16.101.146:5800/todos", config)
    let data = await res.json();
    return data
}


const validateDeleteTodos = async ({id}) => {
    if (typeof id !== "string" || id === undefined) return {status: 406, message: "El id del todo no cumple con el tipo de dato."};
}

export const deleteTodos = async (arg) => {
    let val = await validateDeleteTodos(arg);
    if (val) return val;
    
    let config = {
        method: "DELETE",
        headers: {"Content-Type": "application/json"},
    };
    
    let res = await fetch(`http://172.16.101.146:5802/todos/${arg.id}`, config);
    if (res.status === 404) return {status: 204, message: "El todo que desea eliminar no está registrado"};
    let data = await res.json();
    data.status = 202;
    data.message = `El todo ${arg.id} fue eliminado de la base de datos`;
    return data;
}