// ===== Reto 3: Saludo en varios idiomas =====
// Crea la función crearSaludo, que recibe UN objeto con nombre e idioma y devuelve un saludo:
//   "es" → "Hola, <nombre>"    "en" → "Hello, <nombre>"    "fr" → "Bonjour, <nombre>"
// Si no se indica el idioma, se usa "es".
//
// Ejemplos:
//   crearSaludo({ nombre: "Ana", idioma: "en" })  →  "Hello, Ana"
//   crearSaludo({ nombre: "Ana" })                →  "Hola, Ana"
//
// Pista: puedes desestructurar el objeto en los parámetros y dar un valor por defecto:
//   function crearSaludo({ nombre, idioma = "es" }) { ... }
// Repasa: 09-funcioes/07-parametros.js y 09-funcioes/08-param-destructuring.js

function crearSaludo(datos) {
  // Escribe tu código aquí
}

// ===== Pruebas (no hace falta tocarlas) =====
probar("en español", () => crearSaludo({ nombre: "Ana", idioma: "es" }), "Hola, Ana");
probar("en inglés", () => crearSaludo({ nombre: "Ana", idioma: "en" }), "Hello, Ana");
probar("en francés", () => crearSaludo({ nombre: "Luc", idioma: "fr" }), "Bonjour, Luc");
probar("sin idioma (español por defecto)", () => crearSaludo({ nombre: "Luis" }), "Hola, Luis");
