// ===== Reto 4: Contador =====
// Crea la función crearContador, que devuelve un objeto con tres métodos:
//   incrementar()  suma 1 a la cuenta
//   decrementar()  resta 1 a la cuenta
//   valor()        devuelve la cuenta actual (empieza en 0)
// Cada contador lleva su propia cuenta: cambiar uno no afecta a los demás.
//
// Ejemplo:
//   const c = crearContador();
//   c.incrementar();
//   c.incrementar();
//   c.valor()  →  2
//
// Pista: declara la cuenta con let DENTRO de crearContador. Los métodos que devuelves
// la siguen viendo aunque la función ya haya terminado (esto se llama «closure»).
// Repasa: 09-funcioes/03-alcance.js y 05-objetos/11-private-public.js

function crearContador() {
  // Escribe tu código aquí
}

// ===== Pruebas (no hace falta tocarlas) =====
probar("empieza en 0", () => crearContador().valor(), 0);
probar(
  "incrementar dos veces y decrementar una",
  () => {
    const c = crearContador();
    c.incrementar();
    c.incrementar();
    c.decrementar();
    return c.valor();
  },
  1
);
probar(
  "dos contadores no se mezclan",
  () => {
    const a = crearContador();
    const b = crearContador();
    a.incrementar();
    a.incrementar();
    b.incrementar();
    return [a.valor(), b.valor()];
  },
  [2, 1]
);
