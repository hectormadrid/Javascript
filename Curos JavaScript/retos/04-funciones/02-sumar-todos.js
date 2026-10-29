// ===== Reto 2: Sumar todos =====
// Crea la función sumarTodos, que recibe CUALQUIER cantidad de números y devuelve su suma.
// Si no recibe ninguno, devuelve 0.
//
// Ejemplos:
//   sumarTodos(1, 2, 3)        →  6
//   sumarTodos(10, 20, 30, 40) →  100
//
// Pista: el parámetro rest (...numeros) junta todos los argumentos en un array.
// Repasa: 09-funcioes/06-rest.js

function sumarTodos() {
  // Escribe tu código aquí (y cambia los parámetros)
}

// ===== Pruebas (no hace falta tocarlas) =====
probar("sumarTodos(1, 2, 3)", () => sumarTodos(1, 2, 3), 6);
probar("sumarTodos(10, 20, 30, 40)", () => sumarTodos(10, 20, 30, 40), 100);
probar("sumarTodos(5)", () => sumarTodos(5), 5);
probar("sumarTodos()", () => sumarTodos(), 0);
