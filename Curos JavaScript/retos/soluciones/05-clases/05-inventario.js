// Solución: los productos se guardan en un objeto { nombre: unidades }.
// this.cantidad(producto) ya devuelve 0 si el producto no está, así que se reutiliza.
class Inventario {
  constructor() {
    this.productos = {};
  }

  cantidad(producto) {
    return this.productos[producto] || 0;
  }

  agregar(producto, cantidad) {
    this.productos[producto] = this.cantidad(producto) + cantidad;
  }

  quitar(producto, cantidad) {
    if (cantidad > this.cantidad(producto)) {
      throw new Error(`No hay suficiente ${producto}`);
    }
    this.productos[producto] -= cantidad;
  }

  totalUnidades() {
    return Object.values(this.productos).reduce((total, unidades) => total + unidades, 0);
  }
}
