// Solución: se separan las palabras, se cambia cada una (primera letra en mayúscula
// + el resto igual) y se vuelven a unir con espacios.
function capitalizar(texto) {
  return texto
    .split(" ")
    .map((palabra) => palabra[0].toUpperCase() + palabra.slice(1))
    .join(" ");
}
