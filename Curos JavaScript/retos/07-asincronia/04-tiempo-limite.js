// ===== Reto 4: Tiempo límite =====
// A veces no quieres esperar para siempre. Crea la función conTiempoLimite, que recibe
// una promesa y un número de milisegundos, y devuelve una promesa nueva que:
//   - se cumple con el valor de la promesa original, si esta termina a tiempo
//   - se rechaza con un Error("Tiempo agotado"), si pasan los milisegundos antes
//
// Ejemplo:
//   await conTiempoLimite(tarea(100, "ok"), 500)  →  "ok"
//   await conTiempoLimite(tarea(900, "ok"), 200)  →  Error: Tiempo agotado
//
// Pista: Promise.race([...]) se queda con la primera promesa que termine.
// Crea una segunda promesa que haga reject(new Error("Tiempo agotado")) con setTimeout.
// Repasa: 15-promesas/04-static.js

// tarea(ms, valor): una promesa de ejemplo que tarda ms milisegundos en dar valor. Ya está hecha.
const tarea = (ms, valor) => new Promise((resolve) => setTimeout(() => resolve(valor), ms));

function conTiempoLimite(promesa, ms) {
  // Escribe tu código aquí
}

// ===== Pruebas (no hace falta tocarlas) =====
// Guarda el archivo y pulsa «Ejecutar de nuevo»: ✅ = la prueba pasa, ❌ = algo falla.
probar("termina a tiempo", () => conTiempoLimite(tarea(100, "ok"), 500), "ok");
probar(
  "no termina a tiempo",
  () => conTiempoLimite(tarea(900, "ok"), 200).catch((error) => error.message),
  "Tiempo agotado"
);
