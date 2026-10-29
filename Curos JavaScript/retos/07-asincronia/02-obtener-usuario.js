// ===== Reto 2: Pedir un usuario a una API (necesita internet) =====
// Crea la función ASÍNCRONA obtenerNombre, que recibe un id, pide ese usuario a
//   https://jsonplaceholder.typicode.com/users/<id>
// y devuelve solo su nombre (la propiedad name).
//
// Ejemplo:
//   await obtenerNombre(1)  →  "Leanne Graham"
//
// Pista: const respuesta = await fetch(url);  const usuario = await respuesta.json();
// Repasa: 15-promesas/07-async.js y 15-promesas/08-fetch.js

async function obtenerNombre(id) {
  // Escribe tu código aquí
}

// ===== Pruebas (no hace falta tocarlas) =====
// Guarda el archivo y pulsa «Ejecutar de nuevo»: ✅ = la prueba pasa, ❌ = algo falla.
probar("obtenerNombre(1)", () => obtenerNombre(1), "Leanne Graham");
probar("obtenerNombre(2)", () => obtenerNombre(2), "Ervin Howell");
