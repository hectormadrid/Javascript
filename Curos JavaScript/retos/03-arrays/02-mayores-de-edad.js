// ===== Reto 2: Mayores de edad =====
// Crea la función nombresMayoresDeEdad, que recibe un array de personas y devuelve
// un array con los NOMBRES de las que tienen 18 años o más.
//
// Ejemplo:
//   nombresMayoresDeEdad(personas)  →  ["Ana", "Marta"]
//
// Pista: primero filter (quedarte con los mayores) y después map (quedarte con el nombre).
// Repasa: 07-arrays/12-filter.js y 07-arrays/13-maps.js

const personas = [
  { nombre: "Ana", edad: 34 },
  { nombre: "Luis", edad: 15 },
  { nombre: "Marta", edad: 18 },
  { nombre: "Pablo", edad: 9 },
];

function nombresMayoresDeEdad(personas) {
  // Escribe tu código aquí
}

// ===== Pruebas (no hace falta tocarlas) =====
probar("con la lista de personas", () => nombresMayoresDeEdad(personas), ["Ana", "Marta"]);
probar("si nadie es mayor de edad", () => nombresMayoresDeEdad([{ nombre: "Leo", edad: 4 }]), []);
