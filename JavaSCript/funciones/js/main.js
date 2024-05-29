
//Funciones declarativas

function saludar(nombre){
    return `Hola ${nombre}`
}

let res = saludar("Kathe");
console.log(res);






//Funciones de expresión
let greetings = function(nombre){
    return `Hola ${nombre}`
}

console.log(greetings("Kathe"));






// Función autoejecutable
(function () {
    console.log("¡Hello world!");
    })();


// Función autoejecutable con parámetros
(function (name) {
    console.log(`¡Hola, ${name}!`);
    })("Pepito");










let lista = ["a", "b", "c","d","e","f"]

const getAllArray = function(value, indice, copy){
    console.log(value);
}

lista.forEach(getAllArray);


// Funciones de flecha
const func1 = function () {
return "Función tradicional.";
};

const func2 = () => {
return "Función flecha.";
};

//Ejemplo funcion flecha: 
const saludo = nombre =>`Hola ${nombre}`
let res2 = saludar("Kathe")
console.log(res)



