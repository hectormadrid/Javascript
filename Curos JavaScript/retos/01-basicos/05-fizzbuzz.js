// ===== Reto 5: FizzBuzz =====
// Un clásico de las entrevistas de programación. Crea la función fizzBuzz, que recibe un número y devuelve:
//   "FizzBuzz"  si es divisible entre 3 y entre 5
//   "Fizz"      si solo es divisible entre 3
//   "Buzz"      si solo es divisible entre 5
//   el mismo número, en cualquier otro caso
//
// Ejemplos:
//   fizzBuzz(9)   →  "Fizz"
//   fizzBuzz(30)  →  "FizzBuzz"
//   fizzBuzz(7)   →  7
//
// Pista: el orden de los if importa. ¿Qué pasa con el 15 si compruebas primero el 3?
// Repasa: 03-control-flujo/01-if-else.js y 02-operadores/04-logicos.js

function fizzBuzz(numero) {
  // Escribe tu código aquí
}

// ===== Pruebas (no hace falta tocarlas) =====
probar("fizzBuzz(3)", () => fizzBuzz(3), "Fizz");
probar("fizzBuzz(10)", () => fizzBuzz(10), "Buzz");
probar("fizzBuzz(15)", () => fizzBuzz(15), "FizzBuzz");
probar("fizzBuzz(7)", () => fizzBuzz(7), 7);
