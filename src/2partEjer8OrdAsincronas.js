const ordenes = [
    { id: 1, cliente: "Ana", monto: 120000 },
    { id: 2, cliente: "Luis", monto: 80000 },
    { id: 3, cliente: "María", monto: 150000 }
];

const verificar = (orden) => new Promise(
    resolve => setTimeout(() => {
        console.log(`[${new Date().toLocaleTimeString()}] Se verifica orden ${orden.id}`);
        resolve(orden);
    },1500
    )
);

const procesar = (orden) => new Promise(
    resolve => setTimeout(() => {
        console.log(`[${new Date().toLocaleTimeString()}] Se procesa orden ${orden.id}`);
        resolve(orden);
    }, 2000
    )
);

const registrar = (orden) => new Promise(
    resolve => setTimeout(() => {
        console.log(`[${new Date().toLocaleTimeString()}] Se registra orden ${orden.id}`);
        resolve(orden);
    }, 1000
    )
);

const notificar = (orden) => new Promise(
    resolve => setTimeout(() => {
        console.log(`[${new Date().toLocaleTimeString()}] Se notifica a ${orden.cliente}`);
        resolve(orden);
    }, 500
    )
);

async function procesarFlujoCompleto(orden) {
    const inicioOrden = Date.now();
    await verificar(orden);
    await procesar(orden);
    await registrar(orden);
    await notificar(orden);
    const tiempoTotal = (Date.now() - inicioOrden) / 1000;
    console.log(`Orden ${orden.id} completada en ${tiempoTotal}s`);
}

async function ejecutarEnSerie() {
    console.log("\nSe inicia procesamiento en serie");
    const inicio = Date.now();
    
    for (const orden of ordenes) {
        await procesarFlujoCompleto(orden);
    }
    
    const fin = (Date.now() - inicio) / 1000;
    console.log(`El tiempo total de serie es: ${fin}s`);
}

async function ejecutarEnParalelo() {
    console.log("\nSe inicia el procesamiento en paralelo");
    const inicio = Date.now();
    
    const promesas = ordenes.map(orden => procesarFlujoCompleto(orden));
    
    await Promise.all(promesas);
    
    const fin = (Date.now() - inicio) / 1000;
    console.log(`El tiempo total de paralelo es: ${fin}s`);
}

async function iniciarSimulacion() {
    await ejecutarEnSerie();
    await ejecutarEnParalelo();
}

iniciarSimulacion();