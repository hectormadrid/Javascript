//ejercicio 6
//Crear un algoritmo que devuelva la cantidad de  numeros positivos de un array de numeros

let array = [1 ,2, 3, 55, 66, -200, 300, -4, 5]; // se crea un arreglo con numeros
function getPositivos(arr) {
  let cantidad = 0; // inicializa positivo1 con 0
  for (numero of arr) {
    // recorre el arreglo
    if (numero > 0) {
      // si el numero es mayor a 0
      cantidad++; // incrementa positivo1
    }
    // retorna positivo1
  }
  return cantidad;
}
let positivos = getPositivos(array); // llama a la funcion con el arreglo
console.log(positivos);
