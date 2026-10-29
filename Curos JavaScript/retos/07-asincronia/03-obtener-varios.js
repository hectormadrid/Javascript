// ===== Reto 3: Varias peticiones a la vez (necesita internet) =====
// La función obtenerNombre ya está hecha (es la solución del reto anterior).
// Crea la función obtenerVarios, que recibe un array de ids y devuelve un array con sus nombres,
// pidiendo todos los usuarios A LA VEZ en lugar de uno detrás de otro.
//
// Ejemplo:
//   await obtenerVarios([1, 2])  →  ["Leanne Graham", "Ervin Howell"]
//
// Pista: ids.map(obtenerNombre) te da un array de promesas, y Promise.all espera a que terminen todas.
// Repasa: 15-promesas/04-static.js y 15-promesas/05-paralelo.js

async function obtenerNombre(id) {
  const respuesta = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const usuario = await respuesta.json();
  return usuario.name;
}

async function obtenerVarios(ids) {
  // Escribe tu código aquí
}

// ===== Pruebas (no hace falta tocarlas) =====
// Guarda el archivo y pulsa «Ejecutar de nuevo»: ✅ = la prueba pasa, ❌ = algo falla.
probar("obtenerVarios([1, 2])", () => obtenerVarios([1, 2]), ["Leanne Graham", "Ervin Howell"]);
probar("obtenerVarios([3])", () => obtenerVarios([3]), ["Clementine Bauch"]);
probar("obtenerVarios([])", () => obtenerVarios([]), []);
