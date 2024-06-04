
//PROMESAS
// Función que retorna una promesa
function operacionAsincronica() {
    return new Promise((resolve, reject) => {
        // Simulamos una operación asincrónica con setTimeout
        setTimeout(() => {
            const exito = true; // Cambia a false para ver el manejo de errores
            if (exito) {
                resolve("¡Operación completada con éxito!");
            } else {
                reject("Hubo un error en la operación.");
            }
        }, 2000); // Espera 2 segundos para simular la operación asincrónica
    });
}

// Usamos la promesa
operacionAsincronica()
    .then((resultado) => {
        console.log(resultado); // Esto se ejecuta si la promesa se resuelve
    })
    .catch((error) => {
        console.error(error); // Esto se ejecuta si la promesa se rechaza
    });





