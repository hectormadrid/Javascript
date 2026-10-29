// Solución: igual que capitalizar, pero de cada palabra solo se queda la primera
// letra en mayúscula seguida de un punto, y se unen sin espacios.
function iniciales(nombreCompleto) {
  return nombreCompleto
    .split(" ")
    .map((palabra) => palabra[0].toUpperCase() + ".")
    .join("");
}
