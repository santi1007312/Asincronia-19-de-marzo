# ⏳ Issue 7: Implementación de Async/Await
> **Meta:** Comprender cómo `await` pausa la ejecución dentro de una función sin bloquear el hilo principal (Event Loop).

## 📝 Descripción del Requerimiento
Se implementó una función asíncrona que espera la resolución de una promesa de 2 segundos. El objetivo es evidenciar que, a diferencia del código síncrono, el sistema puede seguir ejecutando otras instrucciones mientras espera la respuesta.

## 💻 Fragmento de Código Clave
javascript
async function ejecutarTarea() {
    console.log("⏳ Esperando respuesta...");
    const resultado = await simularProcesoLento(); // Pausa aquí
    console.log(resultado);
}


## 🧪 Pruebas y Evidencias
1. **Orden de ejecución:** Se observó en consola que los mensajes externos a la función `async` se imprimen primero.
2. **Tiempo de respuesta:** La aplicación responde exactamente a los 2000ms sin congelar la terminal.

## ✅ Criterios de Aceptación Cumplidos
- [x] Uso de palabra clave `async` y `await`.
- [x] Simulación de delay con `setTimeout` dentro de una Promesa.
- [x] Demostración de flujo no bloqueante.