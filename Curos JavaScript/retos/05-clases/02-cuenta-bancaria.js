// ===== Reto 2: Cuenta bancaria =====
// Crea la clase CuentaBancaria:
//   - El constructor recibe el titular. El saldo empieza en 0.
//   - depositar(cantidad)  suma la cantidad al saldo.
//   - retirar(cantidad)    resta la cantidad. Si no hay saldo suficiente,
//                          lanza un error con el mensaje "Saldo insuficiente".
//   - get saldo            permite LEER el saldo, pero nadie puede cambiarlo desde fuera.
//
// Ejemplo:
//   const cuenta = new CuentaBancaria("Ana");
//   cuenta.depositar(100);
//   cuenta.retirar(30);
//   cuenta.saldo  →  70
//
// Pista: guarda el saldo en una propiedad privada (#saldo) y crea un getter para leerlo.
// Repasa: 13-clases/02-privado.js y 13-clases/04-get-set.js

class CuentaBancaria {
  // Escribe tu código aquí
}

// ===== Pruebas (no hace falta tocarlas) =====
probar("guarda el titular", () => new CuentaBancaria("Ana").titular, "Ana");
probar("el saldo empieza en 0", () => new CuentaBancaria("Ana").saldo, 0);
probar(
  "depositar 100 y retirar 30",
  () => {
    const cuenta = new CuentaBancaria("Ana");
    cuenta.depositar(100);
    cuenta.retirar(30);
    return cuenta.saldo;
  },
  70
);
probar(
  "retirar más de lo que hay lanza un error",
  () => {
    const cuenta = new CuentaBancaria("Ana");
    cuenta.depositar(10);
    try {
      cuenta.retirar(50);
      return "no lanzó ningún error";
    } catch (error) {
      return error.message;
    }
  },
  "Saldo insuficiente"
);
probar(
  "no se puede cambiar el saldo desde fuera",
  () => {
    const cuenta = new CuentaBancaria("Ana");
    cuenta.saldo = 1000000;
    return cuenta.saldo;
  },
  0
);
