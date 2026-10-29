// Solución: map lanza todas las peticiones a la vez (un array de promesas)
// y Promise.all espera a que terminen todas, manteniendo el orden de los ids.
async function obtenerVarios(ids) {
  return Promise.all(ids.map(obtenerNombre));
}
