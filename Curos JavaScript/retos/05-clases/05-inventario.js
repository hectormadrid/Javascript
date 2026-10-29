// ===== Reto 5: Inventario de una tienda =====
// Crea la clase Inventario, que guarda cuántas unidades hay de cada producto:
//   agregar(producto, cantidad)  suma unidades (si el producto no estaba, lo añade)
//   quitar(producto, cantidad)   resta unidades; si no hay suficientes, lanza el error "No hay suficiente <producto>"
//   cantidad(producto)           devuelve las unidades de ese producto (0 si no está)
//   totalUnidades()              devuelve la suma de las unidades de todos los productos
//
// Ejemplo:
//   const tienda = new Inventario();
//   tienda.agregar("manzana", 10);
//   tienda.quitar("manzana", 3);
//   tienda.cantidad("manzana")  →  7
//
// Pista: guarda los productos en un objeto: { manzana: 7, pera: 2 }.
// Repasa: 13-clases/01-clases.js y 05-objetos/02-dinamico.js

class Inventario {
  // Escribe tu código aquí
}

// ===== Pruebas (no hace falta tocarlas) =====
probar("un producto que no está tiene 0 unidades", () => new Inventario().cantidad("kiwi"), 0);
probar(
  "agregar dos veces el mismo producto suma",
  () => {
    const tienda = new Inventario();
    tienda.agregar("manzana", 10);
    tienda.agregar("manzana", 5);
    return tienda.cantidad("manzana");
  },
  15
);
probar(
  "quitar unidades",
  () => {
    const tienda = new Inventario();
    tienda.agregar("manzana", 10);
    tienda.quitar("manzana", 3);
    return tienda.cantidad("manzana");
  },
  7
);
probar(
  "no se puede quitar más de lo que hay",
  () => {
    const tienda = new Inventario();
    tienda.agregar("pera", 2);
    try {
      tienda.quitar("pera", 5);
      return "no lanzó ningún error";
    } catch (error) {
      return error.message;
    }
  },
  "No hay suficiente pera"
);
probar(
  "total de unidades",
  () => {
    const tienda = new Inventario();
    tienda.agregar("manzana", 4);
    tienda.agregar("pera", 6);
    return tienda.totalUnidades();
  },
  10
);
