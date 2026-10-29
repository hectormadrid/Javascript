// Solución: reduce empieza en 0 y, por cada producto, suma precio × cantidad.
function totalCarrito(carrito) {
  return carrito.reduce((total, item) => total + item.precio * item.cantidad, 0);
}
