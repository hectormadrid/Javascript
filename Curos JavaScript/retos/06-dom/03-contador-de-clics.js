// ===== Reto 3: Contador de clics =====
// Crea la función crearContadorDeClics, que DEVUELVE un <button> que:
//   - al principio muestra el texto "Clics: 0"
//   - cada vez que se pulsa, suma 1: "Clics: 1", "Clics: 2", ...
// (Pruébalo tú también: pulsa el botón en el panel «Página».)
//
// Pista: guarda la cuenta en una variable y actualiza el texto dentro de boton.onclick
// o de boton.addEventListener("click", ...).
// Repasa: 14-dom/05-eventos.js

function crearContadorDeClics() {
  // Escribe tu código aquí
}

// ===== Pruebas (no hace falta tocarlas) =====
// Guarda el archivo y pulsa «Ejecutar de nuevo»: ✅ = la prueba pasa, ❌ = algo falla.
const contador = crearContadorDeClics();
if (contador instanceof Node) document.body.append(contador);

probar('empieza mostrando "Clics: 0"', () => contador.textContent, "Clics: 0");
probar(
  'después de 3 clics muestra "Clics: 3"',
  () => {
    contador.click();
    contador.click();
    contador.click();
    return contador.textContent;
  },
  "Clics: 3"
);
