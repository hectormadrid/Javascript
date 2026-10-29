// Solución: reduce empieza con un objeto vacío. Para cada producto, se suma 1 a su categoría.
// (cuenta[categoria] || 0) usa 0 si la categoría todavía no existe.
function contarPorCategoria(productos) {
  return productos.reduce((cuenta, producto) => {
    cuenta[producto.categoria] = (cuenta[producto.categoria] || 0) + 1;
    return cuenta;
  }, {});
}
