// ===== Reto 1: Aplicar dos veces =====
// En JavaScript una función se puede pasar a otra función como si fuera un valor.
// Crea la función aplicarDosVeces, que recibe una función y un valor, y devuelve
// el resultado de aplicar la función al valor dos veces seguidas.
//
// Ejemplo:
//   aplicarDosVeces((x) => x * 2, 3)  →  12   (3 → 6 → 12)
//
// Pista: es fn(fn(valor)).
// Repasa: 10-ejercicios-04/03.js y 10-ejercicios-04/04.js

function aplicarDosVeces(fn, valor) {
  // Escribe tu código aquí
}

// ===== Pruebas (no hace falta tocarlas) =====
// Guarda el archivo y pulsa «Ejecutar de nuevo»: ✅ = la prueba pasa, ❌ = algo falla.
probar("duplicar dos veces el 3", () => aplicarDosVeces((x) => x * 2, 3), 12);
probar('añadir "!" dos veces', () => aplicarDosVeces((texto) => texto + "!", "hola"), "hola!!");
