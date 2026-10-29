// Solución: componer no calcula nada todavía; devuelve una función nueva que,
// cuando se llame con un valor, aplicará f y después g.
function componer(f, g) {
  return (valor) => g(f(valor));
}
