/**
 * Se define la estructura y los datos iniciales de la transacción comercial.
 * @typedef {Object} Pedido
 * @property {number} id - Identificador único del pedido en el sistema.
 * @property {number} montoBase - Valor bruto del pedido antes de aplicar gravámenes.
 */

/** * @type {Pedido} 
 */
const pedidoActual = { id: 105, montoBase: 250000 };

/**
 * Se valida la existencia física de los productos en el inventario. (OBLIGATORIO)
 * @param {number} id - Identificador del pedido a verificar.
 * @returns {Promise<boolean>} Se resuelve con true tras confirmar la disponibilidad.
 */
const validarStock = (id) => new Promise((resolve) => {
  setTimeout(() => {
    console.log(`[1] Stock validado para el pedido #${id}`);
    resolve(true);
  }, 1000);
});

/**
 * Se calculan los impuestos (IVA 19%) y se determina el valor final de la transacción. (OBLIGATORIO)
 * @param {number} monto - Valor base sobre el cual se realizará el cálculo.
 * @returns {Promise<number>} Se retorna el monto total con impuestos incluidos.
 */
const calcularCostos = (monto) => new Promise((resolve) => {
  setTimeout(() => {
    const total = monto * 1.19;
    console.log(`[2] Costos calculados: $${total.toFixed(2)}`);
    resolve(total);
  }, 1500);
});

/**
 * Se genera un listado de productos sugeridos basados en el perfil del cliente. (OPCIONAL)
 * @description Este proceso se ejecuta en paralelo para evitar latencia en el flujo crítico.
 * @returns {Promise<string[]>} Se retorna una lista de recomendaciones tras 2 segundos.
 */
const generarRecomendaciones = () => new Promise((resolve) => {
  setTimeout(() => {
    console.log("[3] Recomendaciones generadas para el cliente (Opcional)");
    resolve(["Producto A", "Producto B"]);
  }, 2000);
});

/**
 * Se emite y envía el comprobante legal de venta al cliente. (OBLIGATORIO)
 * @param {number} total - Monto final que aparecerá registrado en la factura.
 * @returns {Promise<string>} Se confirma el envío exitoso del documento electrónico.
 */
const enviarFactura = (total) => new Promise((resolve) => {
  setTimeout(() => {
    console.log(`[4] Factura electrónica enviada por valor de $${total.toFixed(2)}`);
    resolve("FACTURA_EXITOSA");
  }, 1000);
});


/**
 * Se gestiona el flujo integral de venta controlando dependencias jerárquicas y procesos concurrentes.
 * @async
 * @param {Pedido} pedido - Objeto con la información de la orden a procesar.
 * @throws Se captura y reporta cualquier fallo en los pasos obligatorios del sistema.
 */
async function procesarPedido(pedido) {
  console.log(`Iniciando procesamiento del pedido #${pedido.id}...\n`);
  const inicio = Date.now();

  try {
    // 1. Fase de Verificación: Paso estrictamente obligatorio e inicial.
    await validarStock(pedido.id);

    /**
     * 2. Fase de Valor Agregado: Se dispara el proceso opcional en paralelo.
     * Al no usar 'await' inmediatamente, el sistema continúa con el flujo principal.
     */
    const promesaOpcional = generarRecomendaciones();

    // 3. Fase de Liquidación: Cálculo de costos necesario para la facturación.
    const costoFinal = await calcularCostos(pedido.montoBase);

    /**
     * 4. Fase de Cierre: Generación de factura electrónica.
     * Depende de los pasos 1 y 3, pero no espera a que termine el paso 2 (recomendaciones).
     */
    const factura = await enviarFactura(costoFinal);

    // 5. Sincronización final: Se asegura la finalización del proceso opcional antes de cerrar.
    await promesaOpcional;

    const tiempoTotal = (Date.now() - inicio) / 1000;
    
    console.log("\n=== ESTADO FINAL DEL SISTEMA ===");
    console.log(`Resultado: ${factura}`);
    console.log(`Tiempo total de ejecución: ${tiempoTotal}s`);

  } catch (error) {
    console.error("\n[ERROR CRÍTICO] El flujo de ventas fue interrumpido:", error);
  }
}

// Se ejecuta el punto de entrada de la aplicación.
procesarPedido(pedidoActual);