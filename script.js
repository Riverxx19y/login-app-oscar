const formulario = document.getElementById("formulario");
const usuario = document.getElementById("usuario");
const clave = document.getElementById("clave");
const errorUsuario = document.getElementById("error-usuario");
const errorClave = document.getElementById("error-clave");
const mensaje = document.getElementById("mensaje");

function validarCampo(campo, textoError, mensajeError) {
  const vacio = campo.value.trim() === "";
  textoError.textContent = vacio ? mensajeError : "";
  campo.classList.toggle("invalido", vacio);
  return !vacio;
}

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();
  mensaje.textContent = "";

  const usuarioValido = validarCampo(usuario, errorUsuario, "El usuario es obligatorio.");
  const claveValida = validarCampo(clave, errorClave, "La contraseña es obligatoria.");

  if (usuarioValido && claveValida) {
    mensaje.textContent = "Datos completos. Bienvenido, " + usuario.value.trim() + ".";
  }
});
