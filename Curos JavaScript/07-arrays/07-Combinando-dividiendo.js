//** Método concat y slice
let arr1 =[1,2];
let arr2 = [3,4];
let combinados = arr1.concat(arr2);//* si quere concatenar dos arrays, podemos usar el método concat
/* console.log(fusion, arr1, arr2); // [1,2,3,4] */

//let division = combinados.slice(1,3); //* si queremos dividir un array, podemos usar el método slice
//let division = combinados.slice(1);
let division = combinados.slice();

console.log(division); // [2,3]

/*
* El método slice devuelve una copia superficial de una porción del array en un nuevo array
* si el array tiene un objeto con una propiedad y se modifica por ejemplo 'combinados'  se modifica el objeto */