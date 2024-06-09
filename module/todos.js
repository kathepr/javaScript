import { getUser } from "./users.js";
export const getAllTodos= async () => {
    let res = await fetch("https://jsonplaceholder.typicode.com/todos");
    let data = await res.json();
    return data;
};

const validateAddTodos = async ({ userId, title, completed }) => {
    if (typeof title !== "string" || title === undefined) return { status: 406, message: ` The data ${title} is not arriving or does not comply with the requiered format` }
    if (typeof completed !== "boolean" || completed === undefined) return { status: 406, message: ` The data ${completed} is not arriving or does not comply with the requiered format` }
    let user = await getUser({ userId })
    if (user.status == 204) return { status: 200, message: `User does not exist` }
}

export const addTodos = async (arg) => {
    let val = await validateAddTodos(arg);
    if (val) return val;
    let config = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(arg)
    };
    let res = await fetch("https://jsonplaceholder.typicode.com/todos", config);
    let data = await res.json();
    return data;
};

const validateDeleteTodos = async ({id}) => {
    if (typeof id !== "string" || id === undefined) return {status: 406, message: "The data for the ID is either not arriving or does not comply with the required format."};
}

export const deleteTodos = async (arg) => {
    let val = await validateDeleteTodos(arg);
    if (val) return val;
    
    let config = {
        method: "DELETE",
        headers: {"Content-Type": "application/json"},
    };
    
    let res = await fetch(`http://172.16.101.146:5800/todos/${arg.id}`, config);
    if (res.status === 404) return {status: 204, message: "The ID does not exist or is in an unaccepted format."};
    let data = await res.json();
    data.status = 202;
    data.message = `${arg.id} has been deleted from the database.`;
    return data;
}