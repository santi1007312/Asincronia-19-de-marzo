const pedido = { id: 1, cliente: "Ana", monto: 120000 };

function verificar(orden, callback) {
    setTimeout(() => {
        console.log(`[${new Date().toLocaleTimeString()}] Se verifica la orden ${orden.id}`);
        callback(orden);
    }, 1500);   
}

function procesar(orden, callback) {
    setTimeout(() => {
        console.log(`[${new Date().toLocaleTimeString()}] Se procesa la orden ${orden.id}`);
        callback(orden);
    }, 2000);
}

function registrar(orden, callback) {
    setTimeout(() => {
        console.log(`[${new Date().toLocaleTimeString()}] Se registra la orden ${orden.id}`);
        callback(orden);
    }, 1000);
}

function notificar(orden) {
    setTimeout(() => {
        console.log(`[${new Date().toLocaleTimeString()}] Se notifica al cliente ${orden.cliente}`);
        console.log("\nProceso finalizado");
    }, 500);
}

verificar(pedido, (orden) => {
    procesar(orden, (orden) => {
        registrar(orden, (orden) => {
            notificar(orden);
        });
    });
});