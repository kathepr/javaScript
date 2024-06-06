import { getUser } from "./users.js";


export const getAllAlbums = async() => {
    let res = await fetch("http://172.16.101.146:5802/albums");
    let data = await res.json();
    return data
}


const validateAddAlbum = async({userId,title}) =>{
    if(typeof userId !== "string" || userId === undefined) return {status: 406, message: `El dato ${userId} recibido no cumple con el tipo de dato ${typeof userId}.`}
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
    let res = await fetch("http://172.16.101.146:5802/albums", config)
    let data = await res.json();
    return data;
}



const validateDeleteAlbum = async({id}) => {
    if(typeof id !== "string" || id === undefined) return {status: 406, message: "El id del album no cumple con el tipo de dato."}
}

export const deleteAlbum = async(arg) => {
    let val = await validateDeleteAlbum(arg);
    if(val) return val;
    
    let config = {
        method: "DELETE",
        headers: {"Content-Type": "application/json"},
    };
    
    let res = await fetch(`http://172.16.101.146:5802/albums/${arg.id}`, config);
    if (res.status === 404) return {status: 204, message: "El album que desea eliminar no está registrado"}
    let data = await res.json();
    data.status = 202
    data.message = `The album ${arg.id} was deleted from database`
    return data;
}

/*

Usa 'async' cuando declares una función que contiene código asíncrono.

Usa 'await' dentro de una función async para esperar la resolución de una promesa antes de continuar con la ejecución del código.

*/