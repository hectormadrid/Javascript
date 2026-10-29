// Solución: la promesa llama a resolve cuando setTimeout termina de esperar.
function esperar(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
