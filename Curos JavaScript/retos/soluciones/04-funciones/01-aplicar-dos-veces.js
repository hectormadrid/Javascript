// Solución: se llama a fn con el valor y, después, otra vez con el resultado.
function aplicarDosVeces(fn, valor) {
  return fn(fn(valor));
}
