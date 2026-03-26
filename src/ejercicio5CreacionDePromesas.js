// 4. Encadenamiento de Callbacks (Callback Hell controlado)
// Ejercicio:
// Crear tres procesos consecutivos (por ejemplo: tomar datos → procesar datos → mostrar
// resultado), cada uno con un setTimeout, y enlazarlos mediante callbacks.
// Meta: mostrar la complejidad que aparece cuando las tareas dependen unas de otras.

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


// 5. Transformando Callbacks en Promesas
// Ejercicio:
// Convertir el ejercicio anterior en una estructura basada en Promesas con .then().
// Meta: visualizar cómo mejora la legibilidad.

function tomarDatos() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Datos tomados");
            resolve();
        }, 1000);
    });
}

function procesarDatos() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Datos procesados");
            resolve();
        }, 1000);
    });
}

function mostrarResultado() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Resultado mostrado");
            resolve();
        }, 1000);
    });
}
// Encadenando las promesas
tomarDatos()
    .then(() => procesarDatos())
    .then(() => mostrarResultado())
    .then(() => console.log("Proceso completo"));
