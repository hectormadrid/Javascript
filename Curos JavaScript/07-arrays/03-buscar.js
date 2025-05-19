//* buscar elementos de un array

//* se pueden buscar elementos de 2 formas, la primera depende si estamos buscando un valor primitivo, 
//* y la segunda es si estamos buscando un valor por referencia  */

const letras = ['a','b',1,'c','d',1];
console.log(letras.indexOf('c')); 
console.log(letras.indexOf(1)); 
console.log(letras.lastIndexOf(1)); 
console.log(letras.includes('b')); 

/*
*se utiliza el indexOf para buscar elementos de un array,
*si el elemento no existe devuelve -1, si existe devuelve la posición,
*lastIndexOf devuelve la última posición del elemento,
*includes devuelve true o false dependiendo si existe o no el elemento
*/