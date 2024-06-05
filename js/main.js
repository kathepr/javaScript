import { addAlbum } from "../module/album.js";
import { addPost } from "../module/post.js";
import { addTodos } from "../module/todos.js";
// import {addUser} from "../module/users.js";



// console.table(await getAllALbums());
// addAlbum({userId: 10, title:"Hello World"})

console.table(await addAlbum({userId: 10, title:"Hello World"}));

console.table(await addPost({
    "userId": 1,
    "id": 1,
    "title": "lala",
    "body": "bla"
  }))

console.table(await addTodos({
    "userId": 10,
    "id": 201,
    "title": "lalala",
    "completed": true
}))