// Solución: se recorre el texto letra a letra y se suma 1 cada vez que la letra
// (pasada a minúscula) está en la lista de vocales.
function contarVocales(texto) {
  let cantidad = 0;
  for (const letra of texto) {
    if ("aeiouáéíóú".includes(letra.toLowerCase())) {
      cantidad++;
    }
  }
  return cantidad;
}
