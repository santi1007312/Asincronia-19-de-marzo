/**
 * Ejercicio Integrador 1 - Versión 3: Async/Await
 * MCódigo limpio, secuencial y fácil de leer.
 */

// 1. Definimos las promesas de los procesos (Simulando la DB)
const buscarUsuario = () => new Promise(res => setTimeout(() => res({ id: 101, nombre: "Santiago" }), 1000));
const consultarPermisos = () => new Promise(res => setTimeout(() => res(["admin", "editor"]), 2000));
const generarReporte = (user, roles) => new Promise(res => setTimeout(() => res(`Reporte: ${user.nombre} tiene permisos: ${roles.join(", ")}`), 1000));

// 2. La función principal marcada como 'async'
async function procesarConsultaFinal() {
    console.time(" Tiempo total");
    console.log(" Iniciando proceso con Async/Await...");

    try {
        // El 'await' pausa la ejecución hasta que la promesa se cumpla
        const usuario = await buscarUsuario();
        console.log(" Usuario encontrado:", usuario.nombre);

        const permisos = await consultarPermisos();
        console.log(" Permisos obtenidos:", permisos);

        const reporte = await generarReporte(usuario, permisos);
        console.log("📄 Resultado final:", reporte);

    } catch (error) {
        console.error(" Hubo un error en el flujo:", error);
    }

    console.timeEnd(" Tiempo total");
}

// Ejecutamos el flujo
procesarConsultaFinal();

console.log(" El hilo principal sigue libre para otras tareas...");