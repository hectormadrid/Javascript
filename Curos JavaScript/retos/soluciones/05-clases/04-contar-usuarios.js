// Solución: #creados es static, así que hay UNO solo para toda la clase (no uno por usuario).
// Dentro de un método static, la clase se escribe por su nombre: Usuario.#creados.
class Usuario {
  static #creados = 0;

  constructor(nombre) {
    this.nombre = nombre;
    Usuario.#creados++;
  }

  static total() {
    return Usuario.#creados;
  }

  static invitado() {
    return new Usuario("Invitado");
  }
}
