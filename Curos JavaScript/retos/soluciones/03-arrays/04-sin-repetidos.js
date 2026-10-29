// Solución: se recorre el array y solo se añade un elemento si todavía no está en el resultado.
function sinRepetidos(array) {
  const resultado = [];
  for (const elemento of array) {
    if (!resultado.includes(elemento)) {
      resultado.push(elemento);
    }
  }
  return resultado;
}

// Otra forma: un Set no admite repetidos, y el spread lo vuelve a convertir en array.
// const sinRepetidos = (array) => [...new Set(array)];
