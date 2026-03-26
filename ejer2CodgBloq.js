/**
 * Se ejecuta un ciclo síncrono pesado para demostrar el bloqueo del Event Loop
 * 
 * @description Esta función realiza un conteo extenso que ocupa el hilo principal
 * de ejecución, impidiendo que cualquier otra tarea se procese hasta que el ciclo finalice
 * * @example
 * contarBloqueante(1000); // Bloqueará el hilo principal hasta imprimir 10000 líneas
 * @param {number} limite - La cantidad de números a contar
 * @throws {Error} Si el límite no es un número válido
 */
function contarBloqueante(limite) {
    // Se inicia la medición de rendimiento
    console.time("Tiempo de ejecución");
    for (let i=1; i <= limite; i++) {
        // Se activa el bloqueo
        console.log(`Progreso: ${i}...`);
    }

    console.log("\nLa tarea finalizo");
    // Se finaliza y muestra el tiempo transcurrido
    console.timeEnd("Tiempo de ejecución");
}

// Se inicia la ejecución con 10,000 de iteraciones
contarBloqueante(10);
/**
 * Esta línea NO se ejecutará hasta que contarBloqueante haya terminado 
 * completamente, demostrando la naturaleza secuencial del hilo principal
 */
console.log("Se termino el ciclo\n");