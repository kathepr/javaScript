import { getUser } from "./users.js"; // Lo importo para verificar el usuario

const validateAddComment = async({ postId, id, name, email, body }) => {
    if (typeof postId !== "string" || postId === undefined) return {status: 406, message: `El dato ${postId} recibido no cumple con el tipo de dato ${typeof postId}.`};
    if (typeof id !== "string" || id === undefined) return {status: 406, message: `El dato ${id} recibido no cumple con el tipo de dato ${typeof id}.`};
    if (typeof name !== "string" || name === undefined) return {status: 406, message: `El dato ${name} recibido no cumple con el tipo de dato ${typeof name}.`};
    if (typeof email !== "string" || email === undefined || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return {status: 406, message: `El dato ${email} recibido no cumple con el tipo de dato ${typeof email} o el formato de email es incorrecto.`};
    if (typeof body !== "string" || body === undefined) return {status: 406, message: `El dato ${body} recibido no cumple con el tipo de dato ${typeof body}.`};

    // Validar que el usuario existe antes de agregar el comentario
    let user = await getUser({ userId: postId }); 
    if (user.status == 204) return {status: 200, message: `Username does not exist`};

}

export const addComment = async(arg) => {
    let val = await validateAddComment(arg);
    if (val) return val;

    const config = {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(arg)
    }

    let res = await fetch("http://172.16.101.146:5801/comments", config);
    let data = await res.json();
    return data;
}

const validateDeleteComment = async ({id}) => {
    if(typeof id !== "string" || id === undefined) return {status: 406, message: "El id del comentario no cumple con el tipo de dato."}
}



export const deleteComment = async(arg) => {
    let val = await validateDeleteComment(arg);
    if(val) return val;
    
    let config = {
        method: "DELETE",
        headers: {"Content-Type": "application/json"},
    };
    
    let res = await fetch(`http://172.16.101.146:5801/comments/${arg.id}`, config);
    if (res.status === 404) return {status: 204, message: "El comentario que desea eliminar no está registrado"}
    let data = await res.json();
    data.status = 202
    data.message = `El comentario ${arg.id} fue eliminado de la base de datos`
    return data;
}
