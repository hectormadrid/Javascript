// ===== Reto 2: Describir a una persona =====
// Crea la función describirPersona, que recibe un objeto con nombre, edad y ciudad
// y devuelve una frase como "Ana tiene 30 años y vive en Madrid".
//
// Ejemplo:
//   describirPersona({ nombre: "Ana", edad: 30, ciudad: "Madrid" })
//   →  "Ana tiene 30 años y vive en Madrid"
//
// Pista: con un template literal es más cómodo: `${persona.nombre} tiene ...`
// Repasa: 05-objetos/16-templates.js

function describirPersona(persona) {
  // Escribe tu código aquí
}

// ===== Pruebas (no hace falta tocarlas) =====
probar(
  "Ana, 30, Madrid",
  () => describirPersona({ nombre: "Ana", edad: 30, ciudad: "Madrid" }),
  "Ana tiene 30 años y vive en Madrid"
);
probar(
  "Luis, 25, Lima",
  () => describirPersona({ nombre: "Luis", edad: 25, ciudad: "Lima" }),
  "Luis tiene 25 años y vive en Lima"
);
