// ===== Reto 7: Contar vocales =====
// Crea la función contarVocales, que recibe un texto y devuelve cuántas vocales tiene.
// Cuentan las mayúsculas y las vocales con tilde (á, é, í, ó, ú).
//
// Ejemplo:
//   contarVocales("Hola")  →  2
//
// Pistas:
//   - for...of recorre un texto letra a letra.
//   - "aeiouáéíóú".includes(letra) dice si una letra es vocal.
//   - letra.toLowerCase() pasa una letra a minúscula.
// Repasa: 03-control-flujo/04-for-of.js

function contarVocales(texto) {
  // Escribe tu código aquí
}

// ===== Pruebas (no hace falta tocarlas) =====
probar('contarVocales("Hola")', () => contarVocales("Hola"), 2);
probar('contarVocales("AEIOU")', () => contarVocales("AEIOU"), 5);
probar('contarVocales("murciélago")', () => contarVocales("murciélago"), 5);
probar('contarVocales("xyz")', () => contarVocales("xyz"), 0);
