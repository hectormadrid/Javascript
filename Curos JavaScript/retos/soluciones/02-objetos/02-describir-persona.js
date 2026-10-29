// Solución: un template literal con las propiedades del objeto.
function describirPersona(persona) {
  return `${persona.nombre} tiene ${persona.edad} años y vive en ${persona.ciudad}`;
}

// Con desestructuración queda todavía más corto:
// const describirPersona = ({ nombre, edad, ciudad }) => `${nombre} tiene ${edad} años y vive en ${ciudad}`;
