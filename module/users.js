const validateAGetUser= async({userId}) => {
    if(typeof userId !== "number" || userId === undefined) return {status: 406, message: `El dato ${userId} recibido no cumple con el tipo de dato ${typeof userId}.`}
}

export const getUser = async(arg) =>{
    let val = await validateAGetUser(arg);
    if(val) return val;
    let res = await fetch(`https://jsonplaceholder.typicode.com/users/${arg.userId}`)
    if(res.status === 404) return {status: 204, message: `Username does not exist`}
    let data = await res.json();
    return data
}