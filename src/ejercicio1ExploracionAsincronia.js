// 1. Explorando la asincronía básica
// Ejercicio:
// Escribe un código que imprima “Inicio”, luego una operación con setTimeout que tarde 2 segundos
// y finalmente “Fin”.
// Meta: que reconozcan el orden real de ejecución.


console.log("inicio");

setTimeout(() => {
    console.log("Operación con setTimeout después de 2 segundos");
}),2000;
console.log("fin");

