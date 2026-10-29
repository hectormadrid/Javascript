// ===== Reto 3: Contar propiedades =====
// Crea la función contarPropiedades, que recibe un objeto y devuelve cuántas propiedades tiene.
//
// Ejemplos:
//   contarPropiedades({ a: 1, b: 2 })  →  2
//   contarPropiedades({})              →  0
//
// Pista: puedes recorrerlo con for...in, o usar Object.keys(objeto), que devuelve un array con sus claves.
// Repasa: 05-objetos/09-list-props.js

function contarPropiedades(objeto) {
  // Escribe tu código aquí
}

// ===== Pruebas (no hace falta tocarlas) =====
probar("{ a: 1, b: 2 }", () => contarPropiedades({ a: 1, b: 2 }), 2);
probar("{ nombre, edad, ciudad }", () => contarPropiedades({ nombre: "Ana", edad: 30, ciudad: "Madrid" }), 3);
probar("{}", () => contarPropiedades({}), 0);
