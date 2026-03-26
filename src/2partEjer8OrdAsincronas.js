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
 * Se inicia la validación de integridad de la orden de forma asincrónica.
 * @param {Orden} orden - Se recibe el objeto de la orden a verificar.
 * @returns {Promise<Orden>} Se retorna una promesa que resuelve con la orden verificada.
 */
function verificar(orden) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`[${new Date().toLocaleTimeString()}] Se verifica la orden ${orden.id}`);
            resolve(orden);
        }, 1500);
    });
}

/**
 * Se ejecuta el procesamiento lógico y financiero de la orden.
 * @param {Orden} orden - Se recibe la orden previamente verificada.
 * @returns {Promise<Orden>} Se retorna una promesa que resuelve con la orden procesada.
 */
function procesar(orden) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`[${new Date().toLocaleTimeString()}] Se procesa la orden ${orden.id}`);
            resolve(orden);
        }, 2000);
    });
}
/**
 * Se realiza el almacenamiento persistente de la orden en la base de datos simulada.
 * @param {Orden} orden - Se recibe la orden lista para ser registrada.
 * @returns {Promise<Orden>} Se retorna una promesa que resuelve tras completar el registro.
 */
function registrar(orden) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`[${new Date().toLocaleTimeString()}] Se registra la orden ${orden.id}`);
            resolve(orden);
        }, 1000);
    });
}
/**
 * Se gestiona el envío de la confirmación final al cliente.
 * @param {Orden} orden - Se recibe la orden registrada para obtener los datos de contacto.
 * @returns {Promise<Orden>} Se retorna una promesa que resuelve al finalizar la notificación.
 */
function notificar(orden) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`[${new Date().toLocaleTimeString()}] Se notifica al cliente ${orden.cliente}`);
            resolve(orden);
        }, 500);
    });
}
/**
 * Se ejecuta el flujo de trabajo utilizando el encadenamiento de promesas (.then).
 * Se garantiza un orden secuencial sin incurrir en anidamiento excesivo (Callback Hell).
 */
console.log("Iniciando proceso con Promesas...");

verificar(pedido)
    .then((orden) => procesar(orden))
    .then((orden) => registrar(orden))
    .then((orden) => notificar(orden))
    .then(() => {
        console.log("\nProceso finalizado");
    })
    .catch((error) => {
        /**
         * Se captura cualquier error ocurrido en cualquiera de las etapas del flujo.
         */
        console.error("Se detectó un error en el flujo:", error);
    });