//*Objetos similares

function similares(obj1, obj2) {
  let iguales = false;
  for (let llave in obj1) {
    if (obj1[llave] !== obj2[llave]) {
      iguales = true;
    }
  }
  return !iguales;
}

let resultados = similares(
  {
    nombre: "Juan",
    apellido: "Perez",
    edad: 20,
  },
  {
    nombre: "Juan",
    apellido: "Perez",
    edad: 20,
  }
);
console.log(resultados); // true
