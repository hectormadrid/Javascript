/*
* Ejercicio 7: calculadora de inpuestos
*/
// Crear una función que reciba un precio y un impuesto y devuelva el precio total con el impuesto incluido.
function precioCompleto(precio, impuesto) {// recibe un precio y un impuesto
  return precio + (precio * impuesto);// devuelve el precio total con el impuesto incluido
}  

let resultado = precioCompleto(19.90, 0.15);// llama a la funcion con un precio y un impuesto

console.log(resultado);// imprime el resultado