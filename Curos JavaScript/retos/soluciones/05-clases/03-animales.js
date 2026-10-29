// Solución: Perro y Gato heredan el constructor de Animal (no hace falta repetirlo)
// y sobrescriben hablar() con su propia versión.
class Animal {
  constructor(nombre) {
    this.nombre = nombre;
  }

  hablar() {
    return `${this.nombre} hace un ruido`;
  }
}

class Perro extends Animal {
  hablar() {
    return `${this.nombre} dice guau`;
  }
}

class Gato extends Animal {
  hablar() {
    return `${this.nombre} dice miau`;
  }
}
