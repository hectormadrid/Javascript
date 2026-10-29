// Solución: el spread copia las propiedades en un objeto nuevo. Las de objeto2 van
// después, así que si una clave se repite, gana su valor. Los originales no se tocan.
function fusionar(objeto1, objeto2) {
  return { ...objeto1, ...objeto2 };
}
