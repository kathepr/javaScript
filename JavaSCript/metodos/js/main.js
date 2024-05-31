/*


***************************************
Metodos para la manipulacion de arrays
***************************************


*/



//AGREGAR ELEMENTO AL ARRAY

const frutas = ["manzana", "banana", "naranja"];
let agregar = frutas.push("mandarina")

console.log(agregar);
console.log(frutas)


//DESESTRUCTURACION PARA FUSIONAR DOS ARRAYS
const frutas2 = ["manzana", "banana", "naranja"];
const frutas3 = ["kiwi", "piña", "mango"];

let agregar2 = frutas2.push(...frutas3)
console.log(frutas2)


//ELIMINAR ULTIMO DATO
const frutas4 = ["Manzana", "Banana", "Naranja"];
const ultimaFruta = frutas4.pop();
console.log(ultimaFruta); // Imprime "Naranja"
console.log(frutas); // Imprime ["Manzana", "Banana"]


//El método splice() en JavaScript se utiliza para modificar el contenido de un array al eliminar o reemplazar elementos existentes y/o agregar nuevos elementos en una posición específica.

const numeros = [1, 2, 3, 4, 5];
numeros.splice(2, 1, 6, 7);
console.log(numeros); // Imprime [1, 2, 6, 7, 4, 5]



const frutas5 = ["manzana", "banana", "naranja"];
frutas5.splice(1,2,"Coco")

/*

El método splice modifica el contenido de un arreglo eliminando, reemplazando o añadiendo elementos en su lugar.

El primer argumento 1 es el índice a partir del cual se empezará a cambiar el arreglo (en este caso, el segundo elemento, "banana").

El segundo argumento 2 es el número de elementos a eliminar comenzando desde el índice 1 (esto eliminará "banana" y "naranja").

El tercer argumento "Coco" es el nuevo elemento que se insertará en el arreglo en la posición del primer elemento eliminado.

*/




//MÉTODO toString( ):  convierte un arreglo en una cadena de texto donde los elementos están separados por comas.

const frutas6 = ["manzana", "banana", "naranja"];
const cadenaFrutas = frutas6.toString();
console.log(cadenaFrutas);  // Salida: "manzana,banana,naranja"



//Método join():  también convierte un arreglo en una cadena de texto, pero te permite especificar un separador personalizado

const frutas7 = ["manzana", "banana", "naranja"];
const cadenaFrutasConEspacios = frutas7.join(" ");
console.log(cadenaFrutasConEspacios);  // Salida: "manzana banana naranja"

const cadenaFrutasConGuiones = frutas7.join("-");
console.log(cadenaFrutasConGuiones);  // Salida: "manzana-banana-naranja"

const cadenaFrutasSinSeparador = frutas7.join("");
console.log(cadenaFrutasSinSeparador);  // Salida: "manzanabanananaranja"





/*


********************
Metodos de búsqueda
********************


*/


// indexOf(): devuelve el primer índice en el que se puede encontrar un elemento dado en el arreglo, o -1 si el elemento no está present
const frutas8 = ["manzana", "banana", "naranja", "banana"];
const indiceBanana = frutas8.indexOf("banana");
console.log(indiceBanana);  // Salida: 1

const indiceCoco = frutas8.indexOf("coco");
console.log(indiceCoco);  // Salida: -1


//lastIndexOf(): devuelve el último índice en el que se puede encontrar un elemento dado en el arreglo, o -1 si el elemento no está presente.

const frutas9 = ["manzana", "banana", "naranja", "banana"];
const ultimoIndiceBanana = frutas9.lastIndexOf("banana");
console.log(ultimoIndiceBanana);  // Salida: 3

//find(): devuelve el primer elemento en el arreglo que cumple con una función de prueba proporcionada. Si ningún elemento cumple con la función de prueba, devuelve undefined.

const numeros2 = [5, 12, 8, 130, 44];
const encontrado = numeros2.find(elemento => elemento > 10);
console.log(encontrado);  // Salida: 12


//findIndex(): devuelve el índice del primer elemento en el arreglo que cumple con una función de prueba proporcionada. Si ningún elemento cumple con la función de prueba, devuelve -1.

const numeros3 = [5, 12, 8, 130, 44];
const indice = numeros3.findIndex(elemento => elemento > 10);
console.log(indice);  // Salida: 1


//includes(): determina si un arreglo incluye un determinado elemento, devolviendo true o false según corresponda.

const frutas10 = ["manzana", "banana", "naranja"];
const tieneBanana = frutas10.includes("banana");
console.log(tieneBanana);  // Salida: true

const tieneCoco = frutas10.includes("coco");
console.log(tieneCoco);  // Salida: false






/*


************************
Metodos de ordenamiento
************************


*/


// sort(): ordena los elementos de un arreglo en su lugar y devuelve el arreglo. Por defecto, ordena los elementos como cadenas de texto en orden alfabético.


const frutas11 = ["manzana", "banana", "naranja"];
frutas11.sort();
console.log(frutas11);  // Salida: ["banana", "manzana", "naranja"]

//cuando se usa sin una función de comparación, convierte los elementos del arreglo a cadenas de texto y los ordena en orden lexicográfico (alfabético). Esto puede llevar a resultados inesperados cuando se ordenan números.
const numeros4 = [10, 2, 5, 1, 9];
numeros4.sort();
console.log(numeros4);  // Salida: [1, 10, 2, 5, 9]

//Para ordenar números correctamente, se debe proporcionar una función de comparación:

const numeros5 = [10, 2, 5, 1, 9];
numeros5.sort((a, b) => a - b);  // Orden ascendente
console.log(numeros5);  // Salida: [1, 2, 5, 9, 10]

numeros5.sort((a, b) => b - a);  // Orden descendente
console.log(numeros5);  // Salida: [10, 9, 5, 2, 1]





//reverse (): nvierte el orden de los elementos de un arreglo en su lugar y devuelve el arreglo.

const frutas12 = ["manzana", "banana", "naranja"];
frutas12.reverse();
console.log(frutas12);  // Salida: ["naranja", "banana", "manzana"]

const numeros6 = [1, 2, 3, 4, 5];
numeros6.reverse();
console.log(numeros6);  // Salida: [5, 4, 3, 2, 1]





/*


********************
Objetos de tipo Set
********************


*/

//El objeto "Set" es una colección de valores únicos, lo que significa que un valor en un Set solo puede aparecer una vez. Los Set son particularmente útiles cuando se necesita almacenar un conjunto de elementos únicos y no se requiere que estén en un orden particular.


const miSet = new Set();
miSet.add(1);
miSet.add(5);
miSet.add(5);  // El valor 5 no se añadirá de nuevo porque ya existe
miSet.add('Hola');
console.log(miSet);  // Salida: Set(3) { 1, 5, 'Hola' }

//size: devuelve el número de elementos en el Set

console.log(miSet.size); // Devolverá 3

//has : Comprobar si un valor está en el Set

console.log(miSet.has(1));      // Salida: true
console.log(miSet.has(3));      // Salida: false
console.log(miSet.has('Hola')); // Salida: true


//delete: Eliminar un valor de un Set
miSet.delete(5);
console.log(miSet);  // Salida: Set(2) { 1, 'Hola' }

//clear: Eliminar todos los valores de un Set

miSet.clear();
console.log(miSet);  // Salida: Set(0) {}





/*


********************
Objetos de tipo Map
********************


*/

//El objeto Map es una colección de pares clave-valor en la que cualquier valor (tanto objetos como valores primitivos) pueden ser usados como clave o valor. 

//Crear un Map
const miMapa = new Map();

//set: Añadir elementos a un Map
miMapa.set('nombre', 'Juan');
miMapa.set(1, 'uno');
miMapa.set(true, 'verdadero');
console.log(miMapa);
// Salida: Map(3) { 'nombre' => 'Juan', 1 => 'uno', true => 'verdadero' }


//size: Obtener el tamaño de un Map

console.log(miMapa.size);  // Salida: 3


//get: Acceder a valores en un Map

console.log(miMapa.get('nombre'));  // Salida: 'Juan'
console.log(miMapa.get(1));         // Salida: 'uno'
console.log(miMapa.get(true));      // Salida: 'verdadero'


//has : Comprobar si una clave existe en un Map

console.log(miMapa.has('nombre'));  // Salida: true
console.log(miMapa.has(2));         // Salida: false

//delete: Eliminar un elemento de un Map

miMapa.delete('nombre');
console.log(miMapa);
// Salida: Map(2) { 1 => 'uno', true => 'verdadero' }


//clear: Vaciar un Map

miMapa.clear();
console.log(miMapa);  // Salida: Map(0) {}