// ===== Reto 5: Ordenar por precio =====
// Crea la función ordenarPorPrecio, que recibe un array de productos y devuelve un array NUEVO
// ordenado del más barato al más caro. El array original no debe cambiar.
//
// Pistas:
//   - sort cambia el array original. Haz antes una copia con [...productos].
//   - Para ordenar números: sort((a, b) => a.precio - b.precio).
// Repasa: 07-arrays/10-ordenando-arrays.js y 07-arrays/08-spread-operator.js

const productos = [
  { nombre: "Teclado", precio: 25 },
  { nombre: "Ratón", precio: 10 },
  { nombre: "Monitor", precio: 150 },
];

function ordenarPorPrecio(productos) {
  // Escribe tu código aquí
}

// ===== Pruebas (no hace falta tocarlas) =====
probar(
  "queda ordenado del más barato al más caro",
  () => ordenarPorPrecio(productos).map((p) => p.nombre),
  ["Ratón", "Teclado", "Monitor"]
);
probar(
  "el array original no cambia",
  () => {
    ordenarPorPrecio(productos);
    return productos.map((p) => p.nombre);
  },
  ["Teclado", "Ratón", "Monitor"]
);
