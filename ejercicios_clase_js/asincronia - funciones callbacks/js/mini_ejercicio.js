// fetch sirve para realizar una solicitud HTTP y obtener datos de una URL específica

fetch('https://jsonplaceholder.typicode.com/photos/1')
  .then((response) => response.json())
  .then((json) => console.log(json));
// let data = await res.text();
// console.log(data);


//GUIA PARA TRABAJAR CON LA APPI: https://jsonplaceholder.typicode.com/guide/