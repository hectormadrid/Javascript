// Solución: await espera a que llegue la respuesta y a que se lea como JSON.
// Como la función es async, lo que se devuelve llega envuelto en una promesa.
async function obtenerNombre(id) {
  const respuesta = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const usuario = await respuesta.json();
  return usuario.name;
}
