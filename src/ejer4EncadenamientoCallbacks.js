/**
 * Proceso 1: Simulación de obtención de información.
 * @description Inicia la cadena de eventos asíncronos con un retraso de 1s.
 * @param {function} callback - Función que se dispara tras obtener los datos.
 */
function tomarDatos(callback) {
    setTimeout(() => {
        console.log("Datos tomados");
        callback();
    }, 1000);
}
/**
 * Proceso 2: Simulación de tratamiento de información.
 * @description Segundo eslabón de la cadena; depende de la finalización de tomarDatos.
 * @param {function} callback - Función que se dispara tras el procesamiento.
 */
function procesarDatos(callback) {
    setTimeout(() => {
        console.log("Datos procesados");
        callback();
    }, 1000);
}
/**
 * Proceso 3: Simulación de visualización final.
 * @description Último eslabón de la cadena antes de cerrar el ciclo completo.
 * @param {function} callback - Función que se dispara tras mostrar el resultado.
 */
function mostrarResultado(callback) {
    setTimeout(() => {
        console.log("Resultado mostrado");
        callback();
    }, 1000);
}

/**
 * EJECUCIÓN: Encadenamiento de Callbacks (Callback Hell controlado).
 * @meta Demostrar la complejidad de las tareas que dependen unas de otras.
 * @note Se observa la estructura de "pirámide" o anidación profunda, donde
 * cada proceso espera la señal (callback) del anterior para iniciar.
 */
tomarDatos(() => {
    procesarDatos(() => {
        mostrarResultado(() => {
            console.log("Proceso completo");
        });
    });
});