// Solución: ...numeros junta todos los argumentos en un array. reduce los suma
// empezando en 0, así que sin argumentos el resultado es 0.
function sumarTodos(...numeros) {
  return numeros.reduce((total, n) => total + n, 0);
}
