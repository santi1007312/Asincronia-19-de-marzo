/**
 * Ejercicio 7: Comprendiendo Async/Await
 * Meta: Visualizar cómo 'await' pausa la función sin bloquear el hilo principal.
 */

const simularProcesoLento = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("✅ Proceso completado con éxito después de 2 segundos");
        }, 2000);
    });
};

async function ejecutarTarea() {
    console.log("⏳ Iniciando tarea asíncrona...");
    
    //await pausa ESTA función,
    // pero permite que el resto del programa siga corriendo.
    const resultado = await simularProcesoLento();
    
    console.log(resultado);
    console.log("🏁 Tarea finalizada.");
}

console.log("🚀 El hilo principal sigue libre... (Mensaje inmediato)");

ejecutarTarea();

console.log("⚙️ El sistema puede hacer otras cosas mientras espera...");