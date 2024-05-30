const miObjeto = {
    nombre: "Ejemplo Objeto",
    version: 1.0,
    descripcion: "Un objeto de ejemplo con una función",
    mostrarInformacion: function(p1, p2) {
    console.log("Nombre: " + this.nombre);
    console.log("Versión: " + this.version);
    console.log("Descripción: " + this.descripcion);
    console.log("Parámetro 1: " + p1);
    console.log("Parámetro 2: " + p2);
    }
    };
    // Llamada a la función dentro del objeto
    miObjeto.mostrarInformacion("Valor 1", "Valor 2");





//TAMBIÉN SE PUEDE ESCRIBIR la función DE ESTA FORMA

const miObjeto2 = {
    nombre: "Ejemplo Objeto",
    version: 1.0,
    descripcion: "Un objeto de ejemplo con una función",
    mostrarInformacion (p1, p2) {
    console.log("Nombre: " + this.nombre);
    console.log("Versión: " + this.version);
    console.log("Descripción: " + this.descripcion);
    console.log("Parámetro 1: " + p1);
    console.log("Parámetro 2: " + p2);
    }
    };
    // Llamada a la función dentro del objeto
    miObjeto.mostrarInformacion("Valor 1", "Valor 2");





/*

nombreFuncion: function(parametro1, parametro2) {

    Código de la función

}
            
*/





//JSON:

/*
El método JSON.stringify() convierte un objeto o valor de JavaScript en una cadena de texto JSON, opcionalmente reemplaza valores si se indica una función de reemplazo, o si se especifican las propiedades mediante un array de reemplazo.

*/

console.log(JSON.stringify({nombre:"Kathe", apellido:"Pimentel"}))



const persona = {
    nombre: "Alice",
    edad: 28,
    casado: true,
    secretos: {
    contraseña: "miContraseñaSecreta",
    hobby: "programación",
    caminar(){
        let num = 1
        return `${this.hobby} ${num + 7}`;
    }
    }
    };


    // Definir una función replacer para filtrar y transforma
    function filtroReplacer(key, value) {
        if (key === "contraseña") {
            return "********"; // Si la clave es "contraseña", devuelve asteriscos
        } else if (key === "nombre") {
            return value.toUpperCase(); // Si la clave es "nombre", devuelve el valor en mayúsculas
        } else if (key === "caminar"){
            return persona.secretos.caminar();
        }else {
            return value; // En cualquier otro caso, devuelve el valor sin cambios
        }
    }
    
    console.log(JSON.stringify(persona, filtroReplacer, 4));


    //Se utiliza JSON.stringify(persona, filtroReplacer, 4) para convertir el objeto persona a una cadena JSON. Se proporciona la función filtroReplacer como segundo argumento, lo que significa que esta función se utilizará para filtrar y transformar ciertos valores durante la conversión. El tercer argumento ( 4 ) se utiliza para agregar indentación de cuatro espacios para hacer la cadena JSON resultante más legible.


    //SIGNO DE INTERROGACIÓN? y DOS PUNTOS???

    // El signo de interrogación (?) actúa como una forma abreviada de escribir una declaración condicional if-else. La expresión evalúa si la variable key es igual a la cadena "contraseña". Si es así, devuelve "********"

    // El signo de interrogación (?) se utiliza para separar la condición de lo que debe devolverse si la condición es verdadera, mientras que el signo de dos puntos (:) separa lo que debe devolverse si la condición es falsa.