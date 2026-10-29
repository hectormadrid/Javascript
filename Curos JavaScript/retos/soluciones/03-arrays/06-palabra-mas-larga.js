// Solución: se recorre cada palabra y se guarda la más larga encontrada hasta el momento.
// Con > (y no >=) en caso de empate se queda la primera.
function palabraMasLarga(frase) {
  let masLarga = "";
  for (const palabra of frase.split(" ")) {
    if (palabra.length > masLarga.length) {
      masLarga = palabra;
    }
  }
  return masLarga;
}
