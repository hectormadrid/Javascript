// ===== Reto 4: Etapa de la vida =====
// Crea la función etapaDeVida, que recibe una edad y devuelve:
//   "niño"         si tiene menos de 13 años
//   "adolescente"  si tiene de 13 a 17
//   "adulto"       si tiene de 18 a 64
//   "mayor"        si tiene 65 o más
//
// Ejemplo:
//   etapaDeVida(15)  →  "adolescente"
//
// Pista: usa if / else if / else y comprueba las edades de menor a mayor.
// Repasa: 03-control-flujo/01-if-else.js

function etapaDeVida(edad) {
  // Escribe tu código aquí
}

// ===== Pruebas (no hace falta tocarlas) =====
probar("etapaDeVida(5)", () => etapaDeVida(5), "niño");
probar("etapaDeVida(13)", () => etapaDeVida(13), "adolescente");
probar("etapaDeVida(17)", () => etapaDeVida(17), "adolescente");
probar("etapaDeVida(18)", () => etapaDeVida(18), "adulto");
probar("etapaDeVida(64)", () => etapaDeVida(64), "adulto");
probar("etapaDeVida(65)", () => etapaDeVida(65), "mayor");
