let num = 5;
num--; //Se le resta una unidad
console.log(num) 


let num2=5;
num2 -= 2 //Si le quiero restar más de una unidad, uso esta escritura
console.log(num2)



//CONDICIONAL:
num3 = 5
if (num3 === 5){
    console.log("El número es igual a 5");
}else if(num3 === 6){
    console.log("El número es igual a 6")
}else{
    console.log("No se cumple ninguna de las condiciones")
}


/*True-False

let res = confirm("Usted tiene la mayoría de edad")
console.log(res)
*/




/*Se solicita al usuario que ingrese un nombre a través de una ventana emergente 

let res = prompt("Ingrese el nombre", "pepito");
console.log(res)
*/




/*Se solicita al usuario que ingrese un número a través de una ventana emergente, convierte la entrada en un número y luego almacena ese número en la variable res


let res = Number(prompt("Ingrese el número"));
console.log(res);
*/



//Se crea una matriz res que contiene dos objetos. 
let res = [
    {nombre:"Kathe", apellido: "Pimentel"},
    {nombre:"Kathe", apellido:["Pimentel", "Rivera"]}
];
console.table(res); //Mostrar la matriz en una tabla

console.log(res[1].apellido[1]); //Imprimir el segundo apellido: Rivera


let arre = ["a", "b", "c", "d", "e", "f"];
for(let i=0; i < arre.length; i++) {
    console.log(res[i]);
}