// ===== Reto 7: Contar por categoría =====
// Crea la función contarPorCategoria, que recibe un array de productos y devuelve un objeto
// que dice cuántos productos hay de cada categoría.
//
// Ejemplo:
//   contarPorCategoria(compra)  →  { fruta: 3, verdura: 1, lácteo: 1 }
//
// Pista: usa reduce empezando con un objeto vacío {}. Para cada producto, suma 1 a objeto[categoria]
// (si todavía no existe, empieza en 0).
// Repasa: 07-arrays/14-reduce.js y 08-ejercicios-3/07.js

const compra = [
  { nombre: "Manzana", categoria: "fruta" },
  { nombre: "Lechuga", categoria: "verdura" },
  { nombre: "Pera", categoria: "fruta" },
  { nombre: "Yogur", categoria: "lácteo" },
  { nombre: "Plátano", categoria: "fruta" },
];

function contarPorCategoria(productos) {
  // Escribe tu código aquí
}

// ===== Pruebas (no hace falta tocarlas) =====
probar("con la lista de la compra", () => contarPorCategoria(compra), { fruta: 3, verdura: 1, lácteo: 1 });
probar("con una lista vacía", () => contarPorCategoria([]), {});
