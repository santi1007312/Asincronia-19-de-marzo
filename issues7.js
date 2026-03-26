/**
 * Ejercicio 7: Comprendiendo Async/Await
 */

// 1. Creamos una promesa que tarda 2 segundos en resolverse
const simularProcesoLento = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(" Proceso completado con éxito después de 2 segundos");
        }, 2000);
    });
};

// 2. Función asíncrona para ejecutar la promesa
async function ejecutarTarea() {
    console.log("Iniciando tarea asíncrona...");
    
    // await pausa ESTA función,
    // pero permite que el resto del programa siga corriendo.
    const resultado = await simularProcesoLento();
    
    console.log(resultado);
    console.log(" Tarea finalizada.");
}

// 3. Prueba de no bloqueo: este mensaje saldrá ANTES que el resultado del await
console.log(" El hilo principal sigue libre... (Mensaje inmediato)");

ejecutarTarea();

console.log(" El sistema puede hacer otras cosas mientras espera...");