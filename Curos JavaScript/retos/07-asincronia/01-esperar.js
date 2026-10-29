// ===== Reto 1: Esperar =====
// Crea la función esperar, que recibe una cantidad de milisegundos y devuelve una PROMESA
// que se cumple (resolve) cuando ha pasado ese tiempo.
//
// Ejemplo:
//   esperar(1000).then(() => console.log("Ha pasado 1 segundo"));
//
// Pista: return new Promise((resolve) => setTimeout(resolve, ms));
// Repasa: 15-promesas/01-promesas.js

function esperar(ms) {
  // Escribe tu código aquí
}

// ===== Pruebas (no hace falta tocarlas) =====
// Guarda el archivo y pulsa «Ejecutar de nuevo»: ✅ = la prueba pasa, ❌ = algo falla.
probar("devuelve una promesa", () => esperar(10) instanceof Promise, true);
probar(
  "espera de verdad (unos 300 ms)",
  async () => {
    const inicio = Date.now();
    await esperar(300);
    return Date.now() - inicio >= 290;
  },
  true
);
