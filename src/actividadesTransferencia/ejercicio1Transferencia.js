// 1. Gestión de una cola de atención
// Enunciado
// Un módulo de soporte registra solicitudes de usuarios. Cada solicitud tarda un tiempo
// distinto en ser atendida. Aunque el sistema atiende cada solicitud por turno (una a la vez),
// el aprendiz debe simular el tiempo de espera, registrar el orden de atención y calcular la
// duración total del proceso.
// Requerimientos
// • Procesar solicitudes de manera secuencial.
// • Registrar inicio y fin de cada atención.
// • Identificar el tiempo total del proceso.
// • Usar asincronía controlada (callback, promesa o async/await).
// Datos de entrada
// • Lista de usuarios con un tiempo estimado de atención.
// Datos de salida
// • Orden real de atención.
// • Tiempo de atención por usuario.
// • Tiempo total del proceso.

const solicitudes = [
    { usuario: "Juan David", tiempo: 2000 },
    { usuario: "Eileen Julieth", tiempo: 1000 },
    { usuario: "Marcos Ruiz", tiempo: 3000 },
    { usuario: "Adriana Lucia", tiempo: 1500 }
];

const atenderUsuario=(solicitud)=>{
    return new Promise((resolve)=>{
        const inicio = new Date().toLocaleTimeString();
        console.log(`Atendiendo a ${solicitud.usuario} - Inicio: ${inicio}`);

        setTimeout(()=>{
            const fin = new Date().toLocaleTimeString();
            resolve({
                usuario: solicitud.usuario,
                duracion: solicitud.tiempo/1000,
                horaFin: fin
            });
        },solicitud.tiempo);
    });
};

async function procesarCola(lista) {
    const tiempoInicioProceso = Date.now();
    const registroAtencion = [];

    console.log("--- Iniciando Gestión de Soporte ---");

    for (const solicitud of lista) {

        const resultado = await atenderUsuario(solicitud);
        registroAtencion.push(resultado);
        console.log(`[FIN] ${resultado.usuario} atendido. Duración: ${resultado.duracion}s`);
    }

    const tiempoTotal = (Date.now() - tiempoInicioProceso) / 1000;


    console.log("\n--- Resumen del Proceso ---");
    console.table(registroAtencion);
    console.log(`Tiempo total del proceso: ${tiempoTotal} segundos.`);
}


procesarCola(solicitudes);