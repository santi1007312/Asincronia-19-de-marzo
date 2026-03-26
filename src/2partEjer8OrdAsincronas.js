/**
 * @typedef {Object} Orden
 * @property {number} id - Identificador único de la orden.
 * @property {string} cliente - Nombre del cliente que realizó la compra.
 * @property {number} monto - Valor total de la transacción.
 */

/**
 * Se define el objeto de entrada para la simulación del centro de procesamiento.
 * @type {Orden}
 */
const pedido = { id: 1, cliente: "Ana", monto: 120000 };

/**
 * @callback ProcesarCallback
 * @param {Orden} orden - Se recibe la orden para continuar al siguiente paso del flujo.
 */

/**
 * Se realiza la validación inicial de los datos de la orden.
 * @param {Orden} orden - Se recibe el objeto de la orden a validar.
 * @param {ProcesarCallback} callback - Se ejecuta para continuar con el procesamiento.
 */
function verificar(orden, callback) {
    setTimeout(() => {
        console.log(`[${new Date().toLocaleTimeString()}] Se verifica la orden ${orden.id}`);
        callback(orden);
    }, 1500);   
}

/**
 * Se ejecuta la lógica de negocio y transformación de la orden.
 * @param {Orden} orden - Se recibe la orden verificada.
 * @param {ProcesarCallback} callback - Se ejecuta para proceder al registro.
 */
function procesar(orden, callback) {
    setTimeout(() => {
        console.log(`[${new Date().toLocaleTimeString()}] Se procesa la orden ${orden.id}`);
        callback(orden);
    }, 2000);
}
/**
 * Se persiste la información de la orden en el sistema de almacenamiento.
 * @param {Orden} orden - Se recibe la orden procesada.
 * @param {ProcesarCallback} callback - Se ejecuta para enviar la notificación final.
 */
function registrar(orden, callback) {
    setTimeout(() => {
        console.log(`[${new Date().toLocaleTimeString()}] Se registra la orden ${orden.id}`);
        callback(orden);
    }, 1000);
}
/**
 * Se comunica al cliente el estado final de su solicitud.
 * @param {Orden} orden - Se recibe la orden registrada para extraer datos del cliente.
 */
function notificar(orden) {
    setTimeout(() => {
        console.log(`[${new Date().toLocaleTimeString()}] Se notifica al cliente ${orden.cliente}`);
        console.log("\nProceso finalizado");
    }, 500);
}
/**
 * Se inicia la ejecución del flujo asincrónico mediante el anidamiento de callbacks.
 * Nota: Se evidencia la estructura de "Callback Hell" o Pirámide de la Perdición.
 */
verificar(pedido, (orden) => {
    procesar(orden, (orden) => {
        registrar(orden, (orden) => {
            notificar(orden);
        });
    });
});