// Solución: cuenta vive dentro de crearContador. Cada llamada crea su propia variable cuenta,
// y los métodos que se devuelven la siguen viendo (closure). Desde fuera no se puede tocar.
function crearContador() {
  let cuenta = 0;
  return {
    incrementar() {
      cuenta++;
    },
    decrementar() {
      cuenta--;
    },
    valor() {
      return cuenta;
    },
  };
}
