// Solución: Object.keys devuelve un array con las claves; su longitud es el número de propiedades.
function contarPropiedades(objeto) {
  return Object.keys(objeto).length;
}

// Con for...in también funciona:
// let cantidad = 0;
// for (const clave in objeto) cantidad++;
// return cantidad;
