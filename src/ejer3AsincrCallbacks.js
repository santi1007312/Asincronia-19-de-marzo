function procesarPedido(callback) {
    setTimeout(() => {
        console.log("Entregando hamburguesa");
        callback();
    }, 3000);
}

procesarPedido(() => {
    console.log("Pedido entregado");
});