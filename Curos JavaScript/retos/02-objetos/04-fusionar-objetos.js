// ===== Reto 4: Fusionar objetos =====
// Crea la función fusionar, que recibe dos objetos y devuelve uno NUEVO con las propiedades de ambos.
// Si una propiedad está en los dos, gana la del segundo. Los objetos originales no deben cambiar.
//
// Ejemplo:
//   fusionar({ a: 1, b: 2 }, { b: 3, c: 4 })  →  { a: 1, b: 3, c: 4 }
//
// Pista: { ...objeto1, ...objeto2 } o Object.assign({}, objeto1, objeto2).
// Repasa: 05-objetos/10-clones.js y 05-objetos/08-referencias.js

function fusionar(objeto1, objeto2) {
  // Escribe tu código aquí
}

// ===== Pruebas (no hace falta tocarlas) =====
probar("fusionar({ a: 1, b: 2 }, { b: 3, c: 4 })", () => fusionar({ a: 1, b: 2 }, { b: 3, c: 4 }), { a: 1, b: 3, c: 4 });
probar(
  "el primer objeto no cambia",
  () => {
    const original = { a: 1 };
    fusionar(original, { b: 2 });
    return original;
  },
  { a: 1 }
);
