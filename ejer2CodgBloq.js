function contarBloqueante(limite) {
    console.time("Tiempo de ejecución");
    for (let i=1; i <= limite; i++) {
        console.log(`Progreso: ${i}...`);
    }

    console.log("\nLa tarea finalizo");
    console.timeEnd("Tiempo de ejecución");
}

contarBloqueante(10000);
console.log("Se termino el ciclo\n");