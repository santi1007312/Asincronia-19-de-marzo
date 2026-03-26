PROYECTO: [ASINCRONÍA - CENTRO DE PROCESAMIENTO DE ÓRDENES] - Software Factory SENA
Metodología: "Del Requerimiento al Producto"

Este repositorio contiene el Ejercicio #2 del Ejercicio 8, una práctica avanzada diseñada para simular un sistema de gestión de pedidos asíncrono, analizando la evolución desde Callbacks hasta el uso eficiente de Async/Await.

INTRODUCCIÓN Y PROPÓSITO
El objetivo de este módulo es comprender el flujo de trabajo de un sistema que procesa órdenes de forma no bloqueante. Se simula un entorno real donde cada pedido debe completar cuatro fases obligatorias: Verificación, Procesamiento, Registro y Notificación.

El "Por qué" (Justificación)
En el desarrollo de software moderno, procesar múltiples órdenes de forma sincrónica bloquearía el servidor. Este ejercicio demuestra cómo la asincronía permite manejar procesos lentos (como latencia de red o base de datos) sin detener la ejecución global.

ESPECIFICACIONES TÉCNICAS DEL EJERCICIO
El sistema se rige por los siguientes tiempos de respuesta simulados:

Verificación: 1500ms

Procesamiento: 2000ms

Registro: 1000ms

Notificación: 500ms

Estructura de Ejecución
Se analizan tres enfoques técnicos:

Callbacks: Implementación inicial para observar la dependencia jerárquica y el "Callback Hell".

Promesas: Refactorización para lograr un código lineal y plano mediante .then().

Async/Await: Implementación final comparando el procesamiento en Serie (una por una) vs Paralelo (todas simultáneas).

CONFIGURACIÓN DEL ENTORNO (LOCAL)
Para ejecutar este ejercicio y validar los tiempos en tu terminal:

Bash
# 1. Cambiar a la rama de la tarea
git checkout feat/ordenesAsincronas

# 2. Ejecutar el script principal
node src/2parteEjer8OrdAsincronas.js

/
├── src/                    # Código fuente

│   └── 2parteEjer8OrdAsincronas.js  # Lógica de procesamiento masivo

├── package.json            # Metadatos del proyecto

└── README.md               # Manual del módulo (este archivo)

ESTÁNDARES DE CALIDAD (DEFINITION OF DONE)
Independencia de Procesos: Se demuestra que las órdenes de diferentes clientes pueden correr en paralelo.

Secuencia Interna: Se garantiza que ninguna notificación se envía antes de completar el registro.

Documentación: Se aplican comentarios JSDoc.

DIRECCIÓN DEL PROYECTO
Desarrollador: Eileen Mendoza

Instructor: John Becerra

Programa: Análisis y Desarrollo de Software - SENA

Ficha: 3065369