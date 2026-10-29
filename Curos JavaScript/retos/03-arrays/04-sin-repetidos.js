// ===== Reto 4: Sin repetidos =====
// Crea la función sinRepetidos, que recibe un array y devuelve otro sin elementos repetidos,
// manteniendo el orden en que aparecen por primera vez.
//
// Ejemplo:
//   sinRepetidos([1, 2, 2, 3, 1])  →  [1, 2, 3]
//
// Pista: recorre el array y añade cada elemento a un array nuevo solo si todavía no está (includes).
// Repasa: 07-arrays/01-agregar.js y 07-arrays/03-buscar.js

function sinRepetidos(array) {
  // Escribe tu código aquí
}

// ===== Pruebas (no hace falta tocarlas) =====
probar("sinRepetidos([1, 2, 2, 3, 1])", () => sinRepetidos([1, 2, 2, 3, 1]), [1, 2, 3]);
probar('sinRepetidos(["a", "b", "a"])', () => sinRepetidos(["a", "b", "a"]), ["a", "b"]);
probar("sinRepetidos([])", () => sinRepetidos([]), []);
