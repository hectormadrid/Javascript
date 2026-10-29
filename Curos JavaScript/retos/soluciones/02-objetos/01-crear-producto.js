// Solución: una factory function. Como los parámetros se llaman igual que las
// propiedades, se puede usar el atajo { nombre, precio }.
function crearProducto(nombre, precio) {
  return {
    nombre,
    precio,
    disponible: true,
  };
}
