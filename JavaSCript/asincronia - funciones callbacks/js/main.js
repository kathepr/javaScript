/*
 Los callbacks son funciones que se pasan como argumentos a otras funciones y se ejecutan una vez que se completa una operación asincrónica.
*/



// Función que toma dos números y un callback para realizar una operación

function realizarOperacion(num1, num2, operacionCallback) {
    console.log(`Operación: ${num1} y ${num2}`);
    // Llama al callback pasándole los dos números como argumentos
    operacionCallback(num1, num2);
    }


// Callback que suma dos números
function sumar(a, b) {
console.log(`Suma: ${a + b}`);
}

// Callback que multiplica dos números
function multiplicar(a, b) {
console.log(`Multiplicación: ${a * b}`);
}

// Uso de la función con los callbacks
realizarOperacion(5, 3, sumar);
realizarOperacion(5, 3, multiplicar);




//setTimeout(): Puede retrasar la ejecución de una función suministrada

setTimeout( function() {
    console.log('pasaron 2 segundos');}, 2000);



//Lenguaje NO bloqueante

// Función simulando una tarea que tomará un tiempo.

function tareaNoBloqueante(callback) {
    console.log("Iniciando tarea no bloqueante...");
    // Simulamos un retardo de 2 segundos para la tarea
    setTimeout(function() {
    console.log("Tarea no bloqueante completada.");
    callback(); // Llamamos a la función de retorno cuando la tarea está comple
    }, 2000);
    }
console.log("Inicio del programa.");
// Llamamos a la función no bloqueante
tareaNoBloqueante(function() {
console.log("Continuando con el resto de tareas después de la tarea no bloqueante")
});

console.log("Fin del programa.");


// GESTIONAR LA ASINCRONÍA:

/*

Para gestionar la asincronía en JavaScript, puedes utilizar varios mecanismos y patrones de programación. Algunos de los principales métodos son:

Métodos para gestionar la asincronía:

* Callbacks: Los callbacks son funciones que se pasan como argumentos a otras funciones y se ejecutan una vez que se completa una operación asincrónica. Es
uno de los métodos más antiguos para manejar la asincronía en JavaScript.

* Promesas: Las promesas son un mecanismo más moderno y más legible para manejar tareas asincrónicas. Permiten encadenar múltiples operaciones y manejar tanto el éxito como el fracaso de una tarea.

* async/await: La sintaxis async/await proporciona una forma más sencilla y legible de trabajar con promesas. Permite escribir código asincrónico de manera
similar al código síncrono, lo que facilita la gestión de la asincronía.
Estos son algunos de los principales mecanismos para gestionar la asincronía en JavaScript. La elección de cuál utilizar depende de la complejidad de tu aplicación
y de tus preferencias personales. Cada uno de estos métodos tiene sus ventajas y desventajas, por lo que es importante seleccionar el más adecuado para tu caso
particular.

*/