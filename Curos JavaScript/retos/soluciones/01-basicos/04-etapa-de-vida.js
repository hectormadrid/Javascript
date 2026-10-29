// Solución: se comprueba de menor a mayor. En cuanto un if se cumple, return sale
// de la función, así que no hace falta comprobar el límite inferior en cada caso.
function etapaDeVida(edad) {
  if (edad < 13) {
    return "niño";
  } else if (edad < 18) {
    return "adolescente";
  } else if (edad < 65) {
    return "adulto";
  } else {
    return "mayor";
  }
}
