// Solución: se recorren los <li>, se comparan los textos en minúsculas,
// se muestra u oculta cada uno y se cuentan los que quedan visibles.
function filtrar(texto) {
  const buscado = texto.toLowerCase();
  let visibles = 0;
  document.querySelectorAll("#frutas li").forEach((li) => {
    const coincide = li.textContent.toLowerCase().includes(buscado);
    li.style.display = coincide ? "" : "none";
    if (coincide) visibles++;
  });
  return visibles;
}

// Extra: filtrar mientras se escribe en el buscador.
buscador.addEventListener("input", () => filtrar(buscador.value));
