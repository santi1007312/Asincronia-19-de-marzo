PROYECTO: [ASINCRONÍA - DEMO DE BLOQUEO] - Software Factory SENA
Metodología: "Del Requerimiento al Producto"

Este repositorio contiene el Ejercicio #2: Código Bloqueante, diseñado para demostrar empíricamente cómo las operaciones síncronas pesadas afectan el rendimiento de las aplicaciones en JavaScript al ocupar el hilo principal.

INTRODUCCIÓN Y PROPÓSITO
El objetivo de este módulo es comprender el comportamiento del Event Loop y el Call Stack. A través de una función de conteo intensivo, visualizamos el fenómeno donde la ejecución secuencial impide que el sistema procese otras tareas.

El "Por qué" (Justificación)
En el desarrollo web moderno, un hilo bloqueado significa una interfaz congelada. Dominar estos conceptos es el primer paso para implementar soluciones asíncronas (Promises, Async/Await) que garanticen una experiencia de usuario fluida.

ESPECIFICACIONES TÉCNICAS DEL EJERCICIO
Función: contarBloqueante(limite)
Es el núcleo del ejercicio. Realiza una iteración lineal que satura el proceso de salida por consola (I/O).

Entrada: Un número entero que define el techo de la iteración.

Instrumentación: Uso de console.time() para medir la latencia generada.

Efecto: Bloqueo absoluto del hilo principal hasta que el ciclo finaliza.

JavaScript
// Ejemplo de ejecución
contarBloqueante(10000); 
console.log("Este mensaje esperará a que el ciclo termine");
CONFIGURACIÓN DEL ENTORNO (LOCAL)
Para ejecutar este ejercicio y observar los tiempos de respuesta en tu terminal:

Bash
# 1. Clonar tu rama de trabajo
git clone -b feat/codigoBloqueante https://github.com/santi1007312/Asincronia-19-de-marzo.git

# 2. Entrar al directorio
cd ASINCRONIAJOHN

# 3. Ejecutar el script con Node.js
node ejer2CodgBloq.js
ARQUITECTURA DEL EJERCICIO
El proyecto sigue la estructura modular definida por el centro de formación:

/
├── docs/                 # Documentación técnica y flujos
├── src/                  # Código fuente
│   └── ejer2CodgBloq.js  # Script principal de la demostración
├── .gitignore            # Exclusión de node_modules
├── package.json          # Metadatos del proyecto
└── README.md             # Manual de usuario (este archivo)

ESTÁNDARES DE CALIDAD (DEFINITION OF DONE)
Para este ejercicio, se han cumplido los siguientes criterios:

Documentación JSDoc: La función está plenamente comentada indicando parámetros y tipos.

Trazabilidad: El tiempo de ejecución se muestra al finalizar para análisis de rendimiento.

DIRECCIÓN DEL PROYECTO
Desarrollador: Eileen Mendoza

Instructor: John Becerra

Programa: Análisis y Desarrollo de Software - SENA

Ficha: 3065369