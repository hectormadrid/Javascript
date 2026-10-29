// ===== Reto 3: Total del carrito =====
// Crea la función totalCarrito, que recibe un carrito (un array de productos con precio y cantidad)
// y devuelve cuánto hay que pagar en total.
//
// Ejemplo:
//   totalCarrito(carrito)  →  7.5   (2 × 1.5 + 1 × 3 + 3 × 0.5)
//
// Pista: reduce va acumulando un valor mientras recorre el array. Empieza en 0.
// Repasa: 07-arrays/14-reduce.js

const carrito = [
  { producto: "Pan", precio: 1.5, cantidad: 2 },
  { producto: "Queso", precio: 3, cantidad: 1 },
  { producto: "Manzana", precio: 0.5, cantidad: 3 },
];

function totalCarrito(carrito) {
  // Escribe tu código aquí
}

// ===== Pruebas (no hace falta tocarlas) =====
probar("con el carrito de ejemplo", () => totalCarrito(carrito), 7.5);
probar("con el carrito vacío", () => totalCarrito([]), 0);
