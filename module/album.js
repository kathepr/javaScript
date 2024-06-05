import { getUser } from "./users.js";


export const getAllALbums = async() => {
    let res = await fetch("https://jsonplaceholder.typicode.com/albums");
    let data = await res.json();
    return data
}


const validateAddAlbum = async({userId,title}) =>{
    if(typeof userId !== "number" || userId === undefined) return {status: 406, message: `El dato ${userId} recibido no cumple con el tipo de dato ${typeof userId}.`}
    if(typeof title !== "string" || title === undefined) return {status: 406, message: `El dato ${title} recibido no cumple con el tipo de dato ${typeof title}.`}
    let user = await getUser({userId});
    if(user.status == 204) return {status: 200, message: `El usuario no existe.`}
}

export const addAlbum = async(arg)=>{
    let val = await validateAddAlbum(arg);
    if(val) return val;
    let config = {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(arg)
    }
    let res = await fetch("https://jsonplaceholder.typicode.com/albums", config)
    let data = await res.json();
    return data;
}





/*

Usa 'async' cuando declares una función que contiene código asíncrono.

Usa 'await' dentro de una función async para esperar la resolución de una promesa antes de continuar con la ejecución del código.

*/