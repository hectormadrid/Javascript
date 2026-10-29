// ===== Reto 5: Capitalizar =====
// Crea la función capitalizar, que recibe un texto y devuelve el mismo texto
// con la primera letra de cada palabra en mayúscula.
//
// Ejemplo:
//   capitalizar("hola mundo")  →  "Hola Mundo"
//
// Pistas:
//   - texto.split(" ") separa las palabras en un array; array.join(" ") las vuelve a unir.
//   - palabra[0].toUpperCase() es la primera letra en mayúscula; palabra.slice(1) es el resto.
// Repasa: 05-objetos/14-string.js

function capitalizar(texto) {
  // Escribe tu código aquí
}

// ===== Pruebas (no hace falta tocarlas) =====
probar('capitalizar("hola mundo")', () => capitalizar("hola mundo"), "Hola Mundo");
probar('capitalizar("javascript")', () => capitalizar("javascript"), "Javascript");
probar('capitalizar("me gusta programar")', () => capitalizar("me gusta programar"), "Me Gusta Programar");
