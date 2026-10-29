// Solución: se desestructura el objeto en los parámetros, con "es" como idioma por defecto,
// y un objeto hace de diccionario de saludos.
function crearSaludo({ nombre, idioma = "es" }) {
  const saludos = {
    es: "Hola",
    en: "Hello",
    fr: "Bonjour",
  };
  return `${saludos[idioma]}, ${nombre}`;
}
