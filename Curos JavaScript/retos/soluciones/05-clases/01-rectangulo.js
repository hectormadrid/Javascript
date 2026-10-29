// Solución: el constructor guarda las medidas en this, y los métodos las usan.
class Rectangulo {
  constructor(ancho, alto) {
    this.ancho = ancho;
    this.alto = alto;
  }

  area() {
    return this.ancho * this.alto;
  }

  perimetro() {
    return 2 * (this.ancho + this.alto);
  }

  esCuadrado() {
    return this.ancho === this.alto;
  }
}
