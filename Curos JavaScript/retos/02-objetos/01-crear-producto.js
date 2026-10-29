// ===== Reto 1: Crear un producto =====
// Crea la función crearProducto, que recibe un nombre y un precio y devuelve un objeto
// con tres propiedades: nombre, precio y disponible (que siempre empieza en true).
//
// Ejemplo:
//   crearProducto("Pan", 1.2)  →  { nombre: "Pan", precio: 1.2, disponible: true }
//
// Pista: si la variable se llama igual que la propiedad, puedes escribir { nombre, precio }.
// Repasa: 05-objetos/03-faction.js y 05-objetos/05-atajos.js

function crearProducto(nombre, precio) {
  // Escribe tu código aquí
}

// ===== Pruebas (no hace falta tocarlas) =====
// Guarda el archivo y pulsa «Ejecutar de nuevo»: ✅ = la prueba pasa, ❌ = algo falla.
probar('crearProducto("Pan", 1.2)', () => crearProducto("Pan", 1.2), { nombre: "Pan", precio: 1.2, disponible: true });
probar('crearProducto("Leche", 0.9)', () => crearProducto("Leche", 0.9), { nombre: "Leche", precio: 0.9, disponible: true });
