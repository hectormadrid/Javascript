// ===== Reto 1: Crear un botón =====
// Crea la función crearBoton, que recibe un texto y DEVUELVE un elemento <button> con:
//   - ese texto dentro
//   - la clase "boton"
// (Las pruebas lo añaden a la página para que lo veas en el panel «Página».)
//
// Ejemplo:
//   crearBoton("Enviar")  →  <button class="boton">Enviar</button>
//
// Pista: document.createElement("button"), boton.textContent y boton.className.
// Repasa: 14-dom/03-elementos.js

function crearBoton(texto) {
  // Escribe tu código aquí
}

// ===== Pruebas (no hace falta tocarlas) =====
// Guarda el archivo y pulsa «Ejecutar de nuevo»: ✅ = la prueba pasa, ❌ = algo falla.
const boton = crearBoton("Enviar");
if (boton instanceof Node) document.body.append(boton);

probar("es un <button>", () => boton.tagName, "BUTTON");
probar('tiene el texto "Enviar"', () => boton.textContent, "Enviar");
probar('tiene la clase "boton"', () => boton.classList.contains("boton"), true);
