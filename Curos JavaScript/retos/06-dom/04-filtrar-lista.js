// ===== Reto 4: Buscador =====
// La página ya tiene una lista de frutas (la crea el código de abajo).
// Crea la función filtrar, que recibe un texto y:
//   - oculta los <li> que NO contienen ese texto (li.style.display = "none")
//   - muestra los que SÍ lo contienen (li.style.display = "")
//   - no distingue mayúsculas de minúsculas
//   - devuelve cuántos <li> quedan visibles
//
// Ejemplo:
//   filtrar("an")  →  2   (se ven Manzana y Naranja)
//
// Pista: document.querySelectorAll("#frutas li") y, para comparar, pasa los dos textos a minúsculas.
// Extra: cuando funcione, conecta el <input> para que filtre mientras escribes (evento "input").
// Repasa: 14-dom/01-selectores.js y 05-objetos/14-string.js

const buscador = document.createElement("input");
buscador.placeholder = "Buscar fruta…";
const frutas = document.createElement("ul");
frutas.id = "frutas";
frutas.innerHTML = "<li>Manzana</li><li>Pera</li><li>Naranja</li><li>Uva</li><li>Kiwi</li>";
document.body.append(buscador, frutas);

function filtrar(texto) {
  // Escribe tu código aquí
}

// ===== Pruebas (no hace falta tocarlas) =====
// Guarda el archivo y pulsa «Ejecutar de nuevo»: ✅ = la prueba pasa, ❌ = algo falla.
const visibles = () =>
  [...document.querySelectorAll("#frutas li")]
    .filter((li) => li.style.display !== "none")
    .map((li) => li.textContent);

probar('filtrar("an") devuelve 2', () => filtrar("an"), 2);
probar(
  'filtrar("an") deja ver Manzana y Naranja',
  () => {
    filtrar("an");
    return visibles();
  },
  ["Manzana", "Naranja"]
);
probar(
  'no distingue mayúsculas: filtrar("PERA")',
  () => {
    filtrar("PERA");
    return visibles();
  },
  ["Pera"]
);
probar('filtrar("") vuelve a mostrar todo', () => filtrar(""), 5);
