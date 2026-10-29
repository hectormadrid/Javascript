// ===== Reto 2: Crear una lista =====
// Crea la función crearLista, que recibe un array de textos y DEVUELVE un elemento <ul>
// con un <li> por cada texto.
//
// Ejemplo:
//   crearLista(["Pan", "Leche"])  →  <ul><li>Pan</li><li>Leche</li></ul>
//
// Pista: crea el <ul>, recorre el array con forEach, y por cada texto crea un <li> y añádelo con append.
// Repasa: 14-dom/03-elementos.js y 14-dom/04-dom.js

function crearLista(textos) {
  // Escribe tu código aquí
}

// ===== Pruebas (no hace falta tocarlas) =====
// Guarda el archivo y pulsa «Ejecutar de nuevo»: ✅ = la prueba pasa, ❌ = algo falla.
const lista = crearLista(["Pan", "Leche", "Huevos"]);
if (lista instanceof Node) document.body.append(lista);

probar("es un <ul>", () => lista.tagName, "UL");
probar("tiene 3 elementos <li>", () => lista.querySelectorAll("li").length, 3);
probar(
  "los textos están en orden",
  () => [...lista.querySelectorAll("li")].map((li) => li.textContent),
  ["Pan", "Leche", "Huevos"]
);
