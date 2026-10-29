// Solución: clics vive dentro de la función. Cada vez que se pulsa el botón,
// el evento suma 1 y vuelve a escribir el texto.
function crearContadorDeClics() {
  let clics = 0;
  const boton = document.createElement("button");
  boton.textContent = "Clics: 0";
  boton.addEventListener("click", () => {
    clics++;
    boton.textContent = `Clics: ${clics}`;
  });
  return boton;
}
