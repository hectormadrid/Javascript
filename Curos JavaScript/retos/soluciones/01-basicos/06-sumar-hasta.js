// Solución: un acumulador que empieza en 0 y un bucle que le suma cada número de 1 a n.
function sumarHasta(n) {
  let total = 0;
  let i = 1;
  while (i <= n) {
    total += i;
    i++;
  }
  return total;
}

// Otra forma, con la fórmula de Gauss (sin bucle):
// const sumarHasta = (n) => (n * (n + 1)) / 2;
