PROYECTO: [VALIDACIÓN DE FORMULARIO CON VERIFICACIONES EXTERNAS] - Software Factory SENA
Metodología: "Del Requerimiento al Producto"

Este módulo simula la validación técnica de un formulario que depende de tres servicios externos (Correo, Documento y Registro Global).

INTRODUCCIÓN Y PROPÓSITO
El objetivo de este módulo es comprender la gestión de múltiples peticiones asíncronas concurrentes. Se simula un entorno real de registro donde un formulario depende de tres servicios externos: Validación de Correo, Consulta de Documento y Disponibilidad en Registro Global.

El "Por qué" (Justificación)
En aplicaciones de alto rendimiento, esperar a que cada validación termine antes de iniciar la siguiente (ejecución en serie) genera una experiencia de usuario deficiente. Este ejercicio demuestra cómo el uso de Promise.allSettled permite disparar todas las peticiones simultáneamente, reduciendo el tiempo de espera al máximo delay individual.

ESPECIFICACIONES TÉCNICAS DEL EJERCICIO
El sistema se rige por los siguientes tiempos de latencia y reglas de negocio:
Servicio            Tiempo (ms)  Criterio de Aceptación
Validar Correo      1200msDebe   contener el carácter "@".Validar Documento   800ms        Longitud mínima 8 caract
Validar Registro    1600ms       El nombre no esta vacío.

Estrategia de Implementación
Concurrencia: Se utiliza Promise.allSettled para procesar todas las validaciones en paralelo.

Resiliencia: El sistema captura tanto los éxitos (fulfilled) como los fallos (rejected) de cada servicio de forma individual.

Consolidación: Se genera un reporte final que determina si el formulario es apto para el envío basado en el cumplimiento del 100% de las reglas.

CONFIGURACIÓN DEL ENTORNO (LOCAL)
Para ejecutar este ejercicio y validar la lógica de concurrencia en tu terminal:

Bash
# 1. Cambiar a la rama de la tarea
git checkout feat/validacionesParalelas

# 2. Ejecutar el script principal
node src/ejer3ValidacionFormulario.js

/
├── src/                    # Código fuente

│   └── ejer3ValidacionFormulario.js  # Lógica de validación con Promise.allSettled

├── package.json            # Metadatos del proyecto

└── README.md               # Manual del módulo (este archivo)

ESTÁNDARES DE CALIDAD (DEFINITION OF DONE)
Optimización: El tiempo total del proceso no excede los 1600ms (tiempo del servicio más lento).

Manejo de Errores: Se identifican y muestran los motivos de fallo específicos sin interrumpir el flujo global.

Documentación: Se aplican comentarios JSDoc con redacción técnica descriptiva 

DIRECCIÓN DEL PROYECTO
Desarrollador: Eileen Mendoza

Instructor: John Becerra

Programa: Análisis y Desarrollo de Software - SENA

Ficha: 3065369
