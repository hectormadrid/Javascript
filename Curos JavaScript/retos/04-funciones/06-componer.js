// ===== Reto 6: Componer funciones =====
// Crea la función componer, que recibe dos funciones (f y g) y DEVUELVE UNA FUNCIÓN NUEVA.
// Esa función nueva recibe un valor, le aplica f y al resultado le aplica g.
//
// Ejemplo:
//   const sumarUnoYDuplicar = componer((x) => x + 1, (x) => x * 2);
//   sumarUnoYDuplicar(3)  →  8   (3 + 1 = 4, 4 × 2 = 8)
//
// Pista: return (valor) => g(f(valor));  ¡Una función que devuelve otra función!
// Repasa: 09-funcioes/05-fat-arrow.js y 05-objetos/06-funciones.js

function componer(f, g) {
  // Escribe tu código aquí
}

// ===== Pruebas (no hace falta tocarlas) =====
probar(
  "sumar 1 y después duplicar",
  () => componer((x) => x + 1, (x) => x * 2)(3),
  8
);
probar(
  "el orden importa: duplicar y después sumar 1",
  () => componer((x) => x * 2, (x) => x + 1)(3),
  7
);
probar(
  "con textos",
  () => componer((t) => t.trim(), (t) => t.toUpperCase())("  hola  "),
  "HOLA"
);
