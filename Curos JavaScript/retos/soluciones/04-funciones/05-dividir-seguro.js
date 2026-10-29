// La función dividir viene dada en el enunciado:
function dividir(a, b) {
  if (b === 0) {
    throw new Error("No se puede dividir entre 0");
  }
  return a / b;
}

// Solución: si dividir lanza un error, el catch lo atrapa y se devuelve su mensaje.
function dividirSeguro(a, b) {
  try {
    return dividir(a, b);
  } catch (error) {
    return error.message;
  }
}
