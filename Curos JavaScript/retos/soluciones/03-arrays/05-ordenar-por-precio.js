// Solución: [...productos] crea una copia, y sort ordena la copia sin tocar el original.
// Restar los precios da un número negativo, 0 o positivo, que es lo que sort necesita.
function ordenarPorPrecio(productos) {
  return [...productos].sort((a, b) => a.precio - b.precio);
}
