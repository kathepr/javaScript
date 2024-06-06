import { getAllAlbums, addAlbum, deleteAlbum } from "../module/album.js";
import { getAllPosts, addPost, deletePost } from "../module/post.js";
import { addTodos, deleteTodos } from "../module/todos.js";
import {getAllUsers, addUser, deleteUser} from "../module/users.js";
import { addComment, deleteComment } from "../module/comments.js";


let menuAlbums = async() => {
    let menu = prompt(`

    Album Menu 

    1.Search All
    2.Add
    3.Delete
    

`,1);
    menu = Number(menu);
    if (menu == 1) {
        let res = await getAllAlbums();
    };
    if (menu == 2){
        let userId = prompt("Ingrese el id del usuario");
        let title = prompt("Ingrese el titulo del album", "Gallery");
        console.table(await addAlbum({userId, title}))
    }
    if (menu==3) {
        let id = prompt("Enter ID of the album that you want to delete")
        console.table(await deleteAlbum({id}))
    }
}


let menuPosts = async() => {
    let menu = prompt(`

    Album Posts 

    1.Search All
    2.Add
    3.Delete
    

`,1);
    menu = Number(menu);
    if (menu == 1) {
        let res = await getAllPosts();
    };
    if (menu == 2){
        let userId = prompt("Ingrese el id del usuario");
        let title = prompt("Ingrese el titulo del album", "Gallery");
        console.table(await addAlbum({userId, title}))
        let body = promt("Ingrese el contenido de la publicacion.")
        return await addPost({userId, title, body})
    }
    if (menu==3) {
        let id = prompt("Enter ID of the album that you want to delete")
        console.table(await deletePost({id}))
    };
}


let menuUsers = async () => {
    let menu = prompt(`

    Users Menu

    1. Search All
    2. Add
    3. Delete

`, 1);
    menu = Number(menu);
    if (menu == 1) {
        let res = await getAllUsers();
        console.table(res);
    }
    if (menu == 2) {
        let name = prompt("Ingrese el nombre del usuario");
        let username = prompt("Ingrese el nombre de usuario");
        let email = prompt("Ingrese el correo electrónico");
        let street = prompt("Ingrese la calle de la dirección");
        let suite = prompt("Ingrese la suite de la dirección");
        let city = prompt("Ingrese la ciudad de la dirección");
        let zipcode = prompt("Ingrese el código postal de la dirección");
        let lat = prompt("Ingrese la latitud de la geo");
        let lng = prompt("Ingrese la longitud de la geo");
        let phone = prompt("Ingrese el teléfono");
        let website = prompt("Ingrese el sitio web");
        let companyName = prompt("Ingrese el nombre de la compañía");
        let catchPhrase = prompt("Ingrese el lema de la compañía");
        let bs = prompt("Ingrese el bs de la compañía");
        return await addUser({name, username, email, address, phone, website, company})
    }
    if (menu == 3) {
        let id = prompt("Enter ID of the user that you want to delete");
        console.table(await deleteUser({id}));
    }
}




let opc = null;

do{
    let opc = promt(`

    Select an Option

    1. Albums
    2. Posts
    3. Users
    0. Exit

`,1);
    opc = Number(opc);
    if(opc == 1) alert(JSON.stringify(await menuAlbums(), null, 4));
    if(opc == 2) alert(JSON.stringify(await menuPosts(), null, 4));
    if(opc == 3) alert(JSON.stringify(await menuUsers(), null, 4));


} while(opc)



// console.table(await getAllALbums());
// addAlbum({userId: 10, title:"Hello World"})

// console.table(await addAlbum({userId: "10", title:"lalala"}));

// console.table(await addPost({
//     "userId": "1",
//     "title": "lala",
//     "body": "bla"
//   }))

// console.table(await addTodos({
//   "userId": "10",
//   "title": "lalala",
//   "completed": true
// }))

// console.table(await addUser({
//   "name": "Katheryn PR",
//   "username": "kathepr",
//   "email": "kathe@april.biz",
//   "address": {
//     "street": "Dreamers Street",
//     "suite": "Second star to the right and straight on till morning",
//     "city": "Where dreams come true.",
//     "zipcode": "92998-3874",
//     "geo":{
//       "lat": "-37.3159",
//       "lng": "81.1496"
//     }
//   },
//   "phone": "1-770-736-8031 x56442",
//   "website": "kathe.org",
//   "company": {
//     "name": "La la land",
//     "catchPhrase": "Where dreams come true",
//     "bs": "harness real-time dreams"
//   }
// }))

// console.table(await addComment({
//   "postId": "1",
//   "name": "id labore ex et quam laborum",
//   "email": "Eliseo@gardner.biz",
//   "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
// }))


// console.log(await deleteAlbum({id: "48b7"}))
// console.log(await deleteComment({id: " "}))
// console.log(await deletePost({id: " "}))
// console.log(await deleteTodos({id: " "}))
// console.log(await deleteUser({id: " "}))