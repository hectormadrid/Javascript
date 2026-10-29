// Solución: se crea el elemento, se le pone el texto y la clase, y se devuelve.
// (No se añade a la página aquí: de eso se encargan las pruebas.)
function crearBoton(texto) {
  const boton = document.createElement("button");
  boton.textContent = texto;
  boton.className = "boton";
  return boton;
}
