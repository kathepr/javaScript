
// ASYNC/AWAIT: 

// Función que simula una llamada a una API que tarda en responder
function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Datos recibidos");
        }, 2000); // Simula una demora de 2 segundos
    });
}

// Función asíncrona que utiliza await para esperar la resolución de la promesa
async function getData() {
    console.log("Esperando datos...");
    const data = await fetchData();
    console.log(data); // Esto se ejecutará después de que la promesa se haya resuelto
}

// Llamada a la función asíncrona
getData();

