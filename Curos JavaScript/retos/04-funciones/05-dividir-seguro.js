// ===== Reto 5: Dividir sin romper nada =====
// La función dividir (ya está hecha) lanza un error si intentas dividir entre 0.
// Crea la función dividirSeguro, que use dividir y:
//   - si todo va bien, devuelva el resultado
//   - si dividir lanza un error, devuelva el mensaje del error en lugar de romper el programa
//
// Ejemplos:
//   dividirSeguro(10, 2)  →  5
//   dividirSeguro(1, 0)   →  "No se puede dividir entre 0"
//
// Pista: try { ... } catch (error) { ... }. El mensaje está en error.message.
// Repasa: 09-funcioes/10-Try-Catch.js

function dividir(a, b) {
  if (b === 0) {
    throw new Error("No se puede dividir entre 0");
  }
  return a / b;
}

function dividirSeguro(a, b) {
  // Escribe tu código aquí
}

// ===== Pruebas (no hace falta tocarlas) =====
probar("dividirSeguro(10, 2)", () => dividirSeguro(10, 2), 5);
probar("dividirSeguro(9, 3)", () => dividirSeguro(9, 3), 3);
probar("dividirSeguro(1, 0)", () => dividirSeguro(1, 0), "No se puede dividir entre 0");
