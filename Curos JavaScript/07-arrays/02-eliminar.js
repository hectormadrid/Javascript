//* Eliminar elementos de un array
const letras = ['a', 'b', 'c','d'];

/* const final = letras.pop(); // Elimina el último elemento del array

console.log(final, letras) */

/* const comienzo = letras.shift(); // Elimina el primer elemento del array
console.log(comienzo, letras); // ['b', 'c', 'd'] */


const entremedio = letras.splice(1,2); // Elimina el elemento en la posición 1

console.log(entremedio, letras); // ['b', 'c', 'd']
