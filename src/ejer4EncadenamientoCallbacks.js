function tomarDatos(callback) {
    setTimeout(() => {
        console.log("Datos tomados");
        callback();
    }, 1000);
}

function procesarDatos(callback) {
    setTimeout(() => {
        console.log("Datos procesados");
        callback();
    }, 1000);
}

function mostrarResultado(callback) {
    setTimeout(() => {
        console.log("Resultado mostrado");
        callback();
    }, 1000);
}

// Encadenando los callbacks
tomarDatos(() => {
    procesarDatos(() => {
        mostrarResultado(() => {
            console.log("Proceso completo");
        });
    });
});