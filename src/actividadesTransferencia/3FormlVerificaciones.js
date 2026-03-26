/**
 * Se definen los datos globales del usuario para las pruebas de validación.
 * @typedef {Object} DatosUsuario
 * @property {string} nombre - Nombre completo del aspirante.
 * @property {string} correo - Dirección de correo electrónico a validar.
 * @property {string} documento - Número de identificación personal.
 */
const datosUsuario = {
  nombre: "Eileen Mendoza",
  correo: "eileen.mendozagmail.com",// Sin @ para probar el caso de fallo
  documento: "1098765432"
};
/**
 * Se verifica la sintaxis del correo electrónico mediante una promesa.
 * @param {string} correo - El string del correo a evaluar.
 * @returns {Promise<string>} Se resuelve si contiene '@', de lo contrario se rechaza.
 */
function validarCorreo(correo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (correo.includes("@")) {
        resolve("Correo válido");
      } else {
        reject("Correo inválido");
      }
    }, 1200);
  });
}
/**
 * Se consulta la validez del documento de identidad en la base remota.
 * @param {string} documento - El número de documento a verificar.
 * @returns {Promise<string>} Se resuelve si tiene 8 o más caracteres.
 */
function validarDocumento(documento) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (documento.length >= 8) {
        resolve("Documento encontrado");
      } else {
        reject("Documento no encontrado");
      }
    }, 800);
  });
}
/**
 * Se comprueba la disponibilidad del usuario en el registro global del sistema.
 * @param {string} nombre - El nombre del usuario a registrar.
 * @returns {Promise<string>} Se resuelve si el campo no está vacío.
 */
function validarRegistro(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (nombre.trim() !== "") {
        resolve("Usuario disponible");
      } else {
        reject("Usuario no disponible");
      }
    }, 1600);
  });
}
/**
 * Se ejecuta el proceso concurrente de validación para el formulario completo.
 * @async
 * @description Se utiliza Promise.allSettled para capturar el estado de todas las 
 * verificaciones independientemente de si fallan o tienen éxito.
 */
async function validarFormulario() {
  console.log("Iniciando validaciones...");
  const inicio = Date.now();
    // Se disparan las tres promesas en paralelo para optimizar el tiempo de respuesta
  const resultados = await Promise.allSettled([
    validarCorreo(datosUsuario.correo),
    validarDocumento(datosUsuario.documento),
    validarRegistro(datosUsuario.nombre)
  ]);

  const nombres = ["Correo", "Documento", "Registro"];
    // Se itera sobre los resultados para informar el estado individual de cada servicio
  resultados.forEach((resultado, i) => {
    if (resultado.status === "fulfilled") {
      console.log(`+ ${nombres[i]}: ${resultado.value}`);
    } else {
      console.log(`- ${nombres[i]}: ${resultado.reason}`);
    }
  });
  // Se determina el éxito global basándose en que todas las promesas se hayan cumplido
  const todasOk = resultados.every(r => r.status === "fulfilled");
  
  console.log("\nResultado:", todasOk ? "Formulario validado" : "Validación fallida");
  console.log("Tiempo total:", Date.now() - inicio + "ms");
}
// Se inicia la simulación del formulario
validarFormulario();