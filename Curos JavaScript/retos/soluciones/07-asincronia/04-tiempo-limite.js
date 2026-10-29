// Solución: dos promesas compiten. Si la original termina antes, gana su valor;
// si antes salta el setTimeout, gana el reject con el error.
function conTiempoLimite(promesa, ms) {
  const limite = new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error("Tiempo agotado")), ms);
  });
  return Promise.race([promesa, limite]);
}
