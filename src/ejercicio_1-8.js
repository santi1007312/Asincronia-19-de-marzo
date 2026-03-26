// Ejercicio integrador 1:
// Simular un proceso de “consulta de usuario”, que requiere:
// 1. “Buscar usuario” (promesa de 1 segundo)
// 2. “Consultar permisos” (promesa de 2 segundos)
// 3. “Generar reporte final” (promesa de 1 segundo)
// Realizarlo en tres versiones:
// • Con callbacks
// • Con promesas
// • Con async/await
// Meta: identificar ventajas y desventajas reales de cada técnica.

function buscarUsuario(callback){
    setTimeout(()=>{
        console.log("Buscando Usuario");
        callback();
    }),1000;
}

function consultarPermisos(callback){
    setTimeout(()=>{
        console.log("Consultando Permisos");
        callback();
    }),2000;
}

function GenerarReporte(callback){
    setTimeout(()=>{
        console.log("Reporte Final");
        callback();
    }),1000;
}
buscarUsuario(()=>{
    consultarPermisos(()=>{
        GenerarReporte(()=>{
            console.log("Completado");
        })
    })
})

function Buscar_Usuario(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("Buscando Usuario");
            resolve();
        }),1000;
    })
}
function Consultar_Permisos(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("Consultando Permisos");
            resolve();
        }),2000;
    })
}
function Generar_Reporte(){
    return new Promise((resolve)=>{
        console.log("Reporte Final");
        resolve();
    }),1000;
}

Buscar_Usuario()
    .then(()=>Consultar_Permisos())
    .then(()=>Generar_Reporte())
    .then(()=>console.log("finalisacion"));