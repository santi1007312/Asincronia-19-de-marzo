PROYECTO: [ASINCRONÍA - MANEJO DE CALLBACKS] - Software Factory SENA
Metodología: "Del Requerimiento al Producto"

Este repositorio contiene el Ejercicio #3: Callbacks, diseñado para demostrar cómo gestionar procesos asíncronos mediante funciones de retorno (callbacks), evitando el bloqueo del hilo principal y permitiendo la ejecución diferida.

INTRODUCCIÓN Y PROPÓSITO
El objetivo de este módulo es dominar la Programación Dirigida por Eventos. A diferencia del ejercicio anterior (bloqueante), aquí utilizamos setTimeout para simular una tarea que toma tiempo (3 segundos) sin detener el resto de la aplicación.

El "Por qué" (Justificación)
En la industria, los callbacks son la base para entender cómo JavaScript maneja peticiones a bases de datos o APIs. Este ejercicio simula un flujo real de "Pedido -> Preparación -> Entrega".

ESPECIFICACIONES TÉCNICAS DEL EJERCICIO
Función: procesarPedido(callback)
Implementa una simulación de proceso en segundo plano.

Mecánica: Utiliza el Web API setTimeout.

Tiempo de espera: 3000ms (3 segundos).

Callback: Una función que se dispara únicamente cuando el temporizador llega a cero, asegurando el orden lógico de los mensajes.

JavaScript
// Ejemplo de lógica asíncrona
procesarPedido(() => {
    console.log("Evento finalizado tras 3 segundos");
});

CONFIGURACIÓN DEL ENTORNO (LOCAL)
Para ejecutar este ejercicio y observar la asincronía en tu terminal:

Bash
# 1. Cambiar a la rama de la tarea
git checkout feat/manejoAsincroniaCallbacks

# 2. Ejecutar el script con Node.js
node src/ejer3AsincrCallbacks.js

ARQUITECTURA DEL EJERCICIO
Estructura modular del repositorio:

/
├── docs/                 # Reportes de entrega y guías

├── src/                  # Código fuente

│   └── ejer3AsincrCallbacks.js  # Script de manejo de Callbacks

├── .gitignore            # Archivos ignorados

├── package.json          # Configuración (Scripts de ejecución)

└── README.md             # Manual del ejercicio (este archivo)

ESTÁNDARES DE CALIDAD (DEFINITION OF DONE)
Asincronía Real: El programa no se detiene; el mensaje final solo aparece al cumplirse el tiempo.

Limpieza: Uso de Arrow Functions para una sintaxis moderna y legible.

Documentación: Comentarios internos explicando la meta de comprensión diferida.

DIRECCIÓN DEL PROYECTO
Desarrollador: Eileen Mendoza

Instructor: John Becerra

Programa: Análisis y Desarrollo de Software - SENA

Ficha: 3065369