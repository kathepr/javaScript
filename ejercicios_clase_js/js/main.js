console.log("¡Hola Kathe!");

let data = 5;
console.log(typeof data);

let indefinida; // Variable que no se le ha asignado un valor.
console.log(indefinida);

let nulo = null; //Le asigno intencionalmente null (variable vacia)
console.log(nulo)

let noEsUnNumero = "hola" * 3.7; //NaN - No es un número
console.log(noEsUnNumero);


var text = "Hola, me llamo Kathe";
var number = 30;
var boolean = true;
var notDefined; //undefined

console.log(typeof text); //string
console.log(typeof number); //number
console.log(typeof boolean); //boolean
console.log(typeof notDefined); //undefined


//typeof nos devuelve el tipo de dato de la variable que le pasemos por parámetro

// La función typeof() no nos servirá para variables con tipos de datos más complejos, ya que siempre los mostrará como object. Es  mejor utilizar constructor.name.