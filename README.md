PROYECTO: [PROCESAMIENTO DE PEDIDOS - FLUJO MIXTO] - Software Factory SENA
Metodología: "Del Requerimiento al Producto"

Este módulo contiene la implementación del Ejercicio #4 (Ejercicios transferencia), un sistema de ventas asincrónico que gestiona dependencias críticas y tareas opcionales concurrentes.

INTRODUCCIÓN Y PROPÓSITO
El objetivo de este módulo es dominar el control de flujos híbridos. En un entorno de e-commerce, existen pasos que no pueden avanzar sin el anterior (Serie), mientras que otros pueden ejecutarse en segundo plano para no penalizar el tiempo de respuesta al cliente (Paralelo).

El "Por qué" (Justificación)
Generar recomendaciones de productos es valioso, pero no debe retrasar la emisión de una factura legal. Este ejercicio demuestra cómo "disparar" una promesa sin bloquear el hilo principal, permitiendo que la lógica crítica avance de forma independiente.

ESPECIFICACIONES TÉCNICAS DEL EJERCICIO
El sistema se rige por la siguiente jerarquía de procesos:
Orden,Proceso,Tipo,Tiempo (ms),Dependencia
1,Validar Stock,Obligatorio,1000ms,Ninguna
2,Generar Recomendaciones,Opcional,2000ms,Paralelo al flujo
3,Calcular Costos,Obligatorio,1500ms,Paso 1
4,Enviar Factura,Obligatorio,1000ms,Paso 1 y 3


Estrategia de Implementación
Flujo Crítico: Se usa await en los pasos 1, 3 y 4 para garantizar que la factura contenga los datos correctos.

Optimización (Non-blocking): El paso 2 se inicia sin await inmediatamente después de validar el stock, aprovechando los tiempos de espera de los demás servicios.


Para ejecutar este flujo y observar la trazabilidad en tu terminal:

Bash
# 1. Cambiar a la rama de la tarea
git checkout feat/procesamientoPedidos

# 2. Ejecutar el script principal
node src/ejer4pedidosPasos.js

/
├── src/                    # Código fuente

│   └── ejer4pedidosPasos.js  # Lógica de flujo mixto (Serie/Paralelo)

├── package.json            # Metadatos del proyecto

└── README.md               # Manual del módulo (este archivo)

ESTÁNDARES DE CALIDAD (DEFINITION OF DONE)
Eficiencia Temporal: El tiempo total de entrega de la factura es de ~3.5s, a pesar de que la suma de todos los procesos es de 5.5s.

Integridad de Datos: La factura solo se emite si el stock y los cálculos son exitosos.

Documentación: Se aplican comentarios JSDoc profesionales.

DIRECCIÓN DEL PROYECTO
Desarrollador: Eileen Mendoza

Instructor: John Becerra

Programa: Análisis y Desarrollo de Software - SENA

Ficha: 3065369
