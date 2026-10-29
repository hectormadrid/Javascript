// Solución: #saldo es privado, así que solo los métodos de la clase pueden cambiarlo.
// Como hay un get saldo pero ningún set saldo, desde fuera se puede leer pero no escribir.
class CuentaBancaria {
  #saldo = 0;

  constructor(titular) {
    this.titular = titular;
  }

  get saldo() {
    return this.#saldo;
  }

  depositar(cantidad) {
    this.#saldo += cantidad;
  }

  retirar(cantidad) {
    if (cantidad > this.#saldo) {
      throw new Error("Saldo insuficiente");
    }
    this.#saldo -= cantidad;
  }
}
