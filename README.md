PROYECTO: [ASINCRONÍA - ENCADENAMIENTO DE CALLBACKS] - Software Factory SENA
Metodología: "Del Requerimiento al Producto"

Este repositorio contiene el Ejercicio #4: Callback Hell, una práctica avanzada diseñada para demostrar la complejidad de los flujos de trabajo donde una tarea asíncrona depende estrictamente del resultado de la anterior.

INTRODUCCIÓN Y PROPÓSITO
El objetivo de este módulo es comprender el Flujo de Ejecución Secuencial. A través de tres procesos simulados (Carga -> Procesamiento -> Salida), se observa cómo la anidación de funciones permite mantener el orden lógico, a costa de aumentar la complejidad visual del código.

El "Por qué" (Justificación)
En el desarrollo de software, es común que no podamos procesar datos si primero no los hemos "tomado" de una base de datos. Este ejercicio ilustra la solución clásica antes de la llegada de las Promesas.

ESPECIFICACIONES TÉCNICAS DEL EJERCICIO
El sistema se divide en tres etapas consecutivas, cada una con un retraso de 1000ms (1 segundo):

tomarDatos(callback): Inicia la cadena. Simula la latencia de red.

procesarDatos(callback): Recibe el control del primer proceso. Simula lógica de negocio.

mostrarResultado(callback): Cierra la cadena. Simula la renderización de la información.

Estructura de la "Pirámide"
El código se organiza de la siguiente manera para garantizar el orden:

JavaScript
tomarDatos(() => {
    procesarDatos(() => {
        mostrarResultado(() => {
            // Fin del ciclo
        });
    });
});

CONFIGURACIÓN DEL ENTORNO (LOCAL)
Para ejecutar este ejercicio y observar la cascada de mensajes en tu terminal:

Bash
# 1. Cambiar a la rama de la tarea
git checkout feat/encademanientoCallback

# 2. Ejecutar el script directamente con Node.js
node src/ejer4EncadenamientoCallbakcs.js

ARQUITECTURA DEL EJERCICIO
Estructura de archivos en esta entrega:

/
├── src/                    # Código fuente

│   └── ejer4ChainCallbacks.js  # Lógica de anidación profunda

├── package.json            # Metadatos del proyecto

└── README.md               # Manual del módulo (este archivo)

ESTÁNDARES DE CALIDAD (DEFINITION OF DONE)
Orden Lógico: Los mensajes en consola aparecen en secuencia estricta (1, 2, 3).

Dependencia: Ninguna función inicia antes de que la anterior invoque su callback.

Documentación: Comentarios JSDoc que explican la jerarquía de cada proceso.

DIRECCIÓN DEL PROYECTO
Desarrollador: Eileen Mendoza

Instructor: John Becerra

Programa: Análisis y Desarrollo de Software - SENA

Ficha: 3065369