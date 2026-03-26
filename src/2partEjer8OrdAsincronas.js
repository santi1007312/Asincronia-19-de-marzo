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

function verificar(orden) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`[${new Date().toLocaleTimeString()}] Se verifica la orden ${orden.id}`);
            resolve(orden);
        }, 1500);
    });
}

function procesar(orden) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`[${new Date().toLocaleTimeString()}] Se procesa la orden ${orden.id}`);
            resolve(orden);
        }, 2000);
    });
}
function registrar(orden) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`[${new Date().toLocaleTimeString()}] Se registra la orden ${orden.id}`);
            resolve(orden);
        }, 1000);
    });
}
function notificar(orden) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`[${new Date().toLocaleTimeString()}] Se notifica al cliente ${orden.cliente}`);
            resolve(orden);
        }, 500);
    });
}
// Ejecución del flujo: Estructura plana y legible
console.log("Iniciando proceso con Promesas...");

verificar(pedido)
    .then((orden) => procesar(orden))
    .then((orden) => registrar(orden))
    .then((orden) => notificar(orden))
    .then(() => {
        console.log("\nProceso finalizado");
    })
    .catch((error) => {
        console.error("Se detectó un error en el flujo:", error);
    });