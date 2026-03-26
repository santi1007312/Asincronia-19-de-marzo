/**
 * Simula el procesamiento de un pedido de comida de forma asíncrona.
 * * @description Esta función utiliza un temporizador para emular el tiempo de preparación
 * de un alimento, demostrando cómo JavaScript delega tareas a la Web API sin 
 * detener el hilo principal de ejecución.
 * * @param {function} callback - Función que se ejecutará una vez finalizado el tiempo de espera.
 * @returns {void} No retorna valor, realiza impresiones en consola y ejecuta el callback.
 */
function procesarPedido(callback) {
    // Se establece un retraso de 3000ms (3 segundos)
    setTimeout(() => {
        console.log("Entregando hamburguesa");
        // Se ejecuta la función de retorno (callback) tras completar el tiempo
        callback();
    }, 3000);
}
/**
 * Ejecución del proceso de pedido.
 * * @meta Comprender la ejecución diferida: El mensaje "Pedido entregado" 
 * depende totalmente de la finalización del setTimeout interno.
 */
procesarPedido(() => {
    console.log("Pedido entregado");
});