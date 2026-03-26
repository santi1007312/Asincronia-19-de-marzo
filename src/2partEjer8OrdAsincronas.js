/**
 * @typedef {Object} Orden
 * @property {number} id - Identificador único de la orden.
 * @property {string} cliente - Nombre del cliente que realizó la compra.
 * @property {number} monto - Valor total de la transacción.
 */

/**
 * Se define el listado de órdenes para la simulación de procesamiento masivo.
 * @type {Orden[]}
 */
const ordenes = [
    { id: 1, cliente: "Ana", monto: 120000 },
    { id: 2, cliente: "Luis", monto: 80000 },
    { id: 3, cliente: "María", monto: 150000 }
];

/**
 * Se verifica la integridad de la orden mediante una promesa.
 * @param {Orden} orden - Objeto de la orden a validar.
 * @returns {Promise<Orden>} Se retorna la orden tras 1.5 segundos.
 */
const verificar = (orden) => new Promise(
    resolve => setTimeout(() => {
        console.log(`[${new Date().toLocaleTimeString()}] Se verifica orden ${orden.id}`);
        resolve(orden);
    },1500
    )
);
/**
 * Se procesa la lógica de negocio de la orden.
 * @param {Orden} orden - Objeto de la orden verificada.
 * @returns {Promise<Orden>} Se retorna la orden tras 2 segundos.
 */
const procesar = (orden) => new Promise(
    resolve => setTimeout(() => {
        console.log(`[${new Date().toLocaleTimeString()}] Se procesa orden ${orden.id}`);
        resolve(orden);
    }, 2000
    )
);
/**
 * Se registra la transacción en el sistema persistente.
 * @param {Orden} orden - Objeto de la orden procesada.
 * @returns {Promise<Orden>} Se retorna la orden tras 1 segundo.
 */
const registrar = (orden) => new Promise(
    resolve => setTimeout(() => {
        console.log(`[${new Date().toLocaleTimeString()}] Se registra orden ${orden.id}`);
        resolve(orden);
    }, 1000
    )
);
/**
 * Se notifica al cliente sobre el estado final de su pedido.
 * @param {Orden} orden - Objeto de la orden registrada.
 * @returns {Promise<Orden>} Se retorna la orden tras 0.5 segundos.
 */
const notificar = (orden) => new Promise(
    resolve => setTimeout(() => {
        console.log(`[${new Date().toLocaleTimeString()}] Se notifica a ${orden.cliente}`);
        resolve(orden);
    }, 500
    )
);
/**
 * Se gestiona el ciclo de vida completo de una orden de forma secuencial.
 * @async
 * @param {Orden} orden - La orden que será procesada paso a paso.
 * @returns {Promise<void>} No retorna valor, imprime el progreso en consola.
 */
async function procesarFlujoCompleto(orden) {
    const inicioOrden = Date.now();
    await verificar(orden);
    await procesar(orden);
    await registrar(orden);
    await notificar(orden);
    const tiempoTotal = (Date.now() - inicioOrden) / 1000;
    console.log(`Orden ${orden.id} completada en ${tiempoTotal}s`);
}
/**
 * Se ejecutan las órdenes en serie (una tras otra).
 * @async
 * @description Se garantiza que una orden no inicie hasta que la anterior finalice.
 */
async function ejecutarEnSerie() {
    console.log("\nSe inicia procesamiento en serie");
    const inicio = Date.now();
    
    for (const orden of ordenes) {
        // Se espera explícitamente a que termine cada orden antes de pasar a la siguiente
        await procesarFlujoCompleto(orden);
    }
    
    const fin = (Date.now() - inicio) / 1000;
    console.log(`El tiempo total de serie es: ${fin}s`);
}
/**
 * Se ejecutan las órdenes en paralelo (simultáneamente).
 * @async
 * @description Se optimiza el tiempo total iniciando todas las promesas al mismo tiempo.
 */
async function ejecutarEnParalelo() {
    console.log("\nSe inicia el procesamiento en paralelo");
    const inicio = Date.now();
    // Se mapea el arreglo de órdenes a un arreglo de promesas en ejecución
    const promesas = ordenes.map(orden => procesarFlujoCompleto(orden));
    // Se espera la resolución de todas las tareas concurrentes
    await Promise.all(promesas);
    
    const fin = (Date.now() - inicio) / 1000;
    console.log(`El tiempo total de paralelo es: ${fin}s`);
}
/**
 * Se inicia la simulación comparativa de ambos métodos de procesamiento.
 * @async
 */
async function iniciarSimulacion() {
    await ejecutarEnSerie();
    await ejecutarEnParalelo();
}

iniciarSimulacion();