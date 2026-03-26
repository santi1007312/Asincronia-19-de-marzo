// 6. Manejo de errores con Promesas
// Ejercicio:
// Crear una promesa que simule un proceso que puede fallar 50% de las veces usando resolve y
// reject.
// Meta: entender .catch() y la importancia del manejo de errores.

function procesoAsincrono() {
    return new Promise((resolve, reject)=>{
        const exito = Math.random()>0.5;
        setTimeout(()=>{
            if(exito){
                resolve("Proceso exitoso")
            }else{
                reject("Proceso fallido")
            }
        })
    })
}

procesoAsincrono().then(resultado=>{
    console.log(resultado);
    
}).catch(error=>{
    console.error(error);
})
