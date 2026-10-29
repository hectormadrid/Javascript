// Solución: se crea el <ul> y, por cada texto, un <li> que se añade dentro.
function crearLista(textos) {
  const ul = document.createElement("ul");
  textos.forEach((texto) => {
    const li = document.createElement("li");
    li.textContent = texto;
    ul.append(li);
  });
  return ul;
}
