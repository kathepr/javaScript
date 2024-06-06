const validateGetUser= async({userId}) => {
    if(typeof userId !== "number" || userId === undefined) return {status: 406, message: `El dato ${userId} recibido no cumple con el tipo de dato ${typeof userId}.`}
}




export const getUser = async(arg) =>{
    let val = await validateGetUser(arg);
    if(val) return val;
    let res = await fetch(`http://172.16.101.146:5800/users/${arg.userId}`)
    if(res.status === 404) return {status: 204, message: `Username does not exist`}
    let data = await res.json();
    return data
}



// Función para validar los datos del usuario
const validateAddUser = async({ id, name, username, email, address, phone, website, company }) => {
    if(typeof id !== "string" || id === undefined) 
        return {status: 406, message: `El dato ${id} recibido no cumple con el tipo de dato número.`};
    if(typeof name !== "string" || name === undefined) 
        return {status: 406, message: `El dato ${name} recibido no cumple con el tipo de dato string.`};
    if(typeof username !== "string" || username === undefined) 
        return {status: 406, message: `El dato ${username} recibido no cumple con el tipo de dato string.`};
    if(typeof email !== "string" || email === undefined) 
        return {status: 406, message: `El dato ${email} recibido no cumple con el tipo de dato string.`};
    if(typeof address !== "object" || address === undefined) 
        return {status: 406, message: `El dato ${address} recibido no cumple con el tipo de dato object.`};
    if(typeof phone !== "string" || phone === undefined) 
        return {status: 406, message: `El dato ${phone} recibido no cumple con el tipo de dato string.`};
    if(typeof website !== "string" || website === undefined) 
        return {status: 406, message: `El dato ${website} recibido no cumple con el tipo de dato string.`};
    if(typeof company !== "object" || company === undefined) 
        return {status: 406, message: `El dato ${company} recibido no cumple con el tipo de dato object.`};
    
    let user = await getUser({ id });
    if(user.status === 204) 
        return {status: 200, message: `El usuario no existe`};
}

// Función para agregar un nuevo usuario
export const addUser = async(arg) => {
    let val = await validateAddUser(arg);
    if(val) return val;

    const config = {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(arg)
    }

    let res = await fetch("http://172.16.101.146:5804/users", config);
    let data = await res.json();
    return data;
}