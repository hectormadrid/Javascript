// Solución: filter se queda con las personas de 18 o más, y map con su nombre.
function nombresMayoresDeEdad(personas) {
  return personas.filter((persona) => persona.edad >= 18).map((persona) => persona.nombre);
}
