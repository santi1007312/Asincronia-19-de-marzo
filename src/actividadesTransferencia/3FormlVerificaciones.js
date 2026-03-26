const datosUsuario = {
  nombre: "Eileen Mendoza",
  correo: "eileen.mendozagmail.com",
  documento: "1098765432"
};

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

async function validarFormulario() {
  console.log("Iniciando validaciones...");
  const inicio = Date.now();

  const resultados = await Promise.allSettled([
    validarCorreo(datosUsuario.correo),
    validarDocumento(datosUsuario.documento),
    validarRegistro(datosUsuario.nombre)
  ]);

  const nombres = ["Correo", "Documento", "Registro"];

  resultados.forEach((resultado, i) => {
    if (resultado.status === "fulfilled") {
      console.log(`+ ${nombres[i]}: ${resultado.value}`);
    } else {
      console.log(`- ${nombres[i]}: ${resultado.reason}`);
    }
  });

  const todasOk = resultados.every(r => r.status === "fulfilled");
  console.log("\nResultado:", todasOk ? "Formulario validado" : "Validación fallida");
  console.log("Tiempo total:", Date.now() - inicio + "ms");
}

validarFormulario();