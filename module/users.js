export const getAllUsers = async () => {
  let res = await fetch("http://172.16.101.146:5804/users");
  let data = await res.json();
  return data;
  };
  
const validateGetUser = async({userId}) =>{
  if (typeof userId !== "string" || userId === undefined) return { status: 406, message: ` The data ${userId} is not arriving or does not comply with the requiered format` }
  }
export const getUser = async (arg) => {
  let val = await validateGetUser(arg);
  if (val) return val;
  let res = await fetch(`http://172.16.101.146:5804/users/${arg.userId}`);
  if(res.status === 404) return { status: 204, message: `Username does not exist` }
  let data = await res.json();
  return data;
  };

const validateAddUser = async ({ name, username, email, address, phone, website, company}) => {
  if (typeof name !== "string" || name === undefined) return { status: 406, message: `The data name is not arriving or does not comply with the required format` }
  if (typeof username !== "string" || username === undefined) return { status: 406, message: `The data username is not arriving or does not comply with the required format` }
  if (typeof email !== "string" || email === undefined) return { status: 406, message: `The data email is not arriving or does not comply with the required format` }
  if (typeof address !== "object" || address === undefined) return { status: 406, message: `The data address is not arriving or does not comply with the required format` }
  if (typeof phone !== "string" || phone === undefined) return { status: 406, message: `The data phone is not arriving or does not comply with the required format` }
  if (typeof website !== "string" || website === undefined) return { status: 406, message: `The data website is not arriving or does not comply with the required format` }
  if (typeof company !== "object" || company === undefined) return { status: 406, message: `The data company is not arriving or does not comply with the required format` }
}

export const addUser = async (arg) => {
  let val = await validateAddUser(arg);
  if (val) return val;
  let config = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(arg)
  };
  let res = await fetch("http://172.16.101.146:5804/users", config);
  let data = await res.json();
  return data;
};
const validateUpdateUser = async ({ name, username, email, address, phone, website, company, userId}) => {
  if (typeof name !== "string") return { status: 406, message: `The data for 'name' is either not arriving or does not comply with the required format.` }
  if (typeof username !== "string") return { status: 406, message: `The data for 'username' is either not arriving or does not comply with the required format.` }
  if (typeof email !== "string" ) return { status: 406, message: `The data for 'email' is either not arriving or does not comply with the required format` }
  if (typeof address !== "object" ) return { status: 406, message: `The data for 'address' is either not arriving or does not comply with the required format.` }
  if (typeof phone !== "string" ) return { status: 406, message: `The data for 'phone' is either not arriving or does not comply with the required format.` }
  if (typeof website !== "string" ) return { status: 406, message: `The data for 'website' is either not arriving or does not comply with the required format.` }
  if (typeof company !== "object" ) return { status: 406, message: `The data for 'company' is either not arriving or does not comply with the required format.` }
  if (!userId || typeof userId!== "string") throw { status: 406, message: `The data userId is not arriving or does not comply with the required format` }
}
export const updateUser = async(arg)=>{
  let val = await validateUpdateUser(arg);
  if (val) return val;
  let config = {  
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(arg)
  };
  let res = await fetch(`http://172.16.101.146:5804/users/${arg.userId}`, config);
  let data = await res.json();
  return data;
}


export const patchUser = async(userId,arg)=>{
  let config = {  
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(arg)
  };
  let res = await fetch(`http://172.16.101.146:5804/users/${userId}`, config);
  let data = await res.json();
  return data;
}



export const deleteUser = async(userId)=>{
  let config = {  
    method: "DELETE"
  };
  let res = await fetch(`http://172.16.101.146:5804/users/${userId}`, config);
  if(res.status ===404) return {status: 204, message:"The user ID does not exist or is in an unaccepted format."}
  let data = await res.json();
  data.status = 202;
  data.message =`The user with ID ${userId} has been deleted from the database.`
  return data;
}
