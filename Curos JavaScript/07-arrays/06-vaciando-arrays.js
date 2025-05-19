//* Vaciar un array

/* let arr = [1,2,3,4,5];

arr = []; // Asignar un nuevo array vacío */

let arr = [1,2,3,4,5];
let arr2 = arr; // Asignar la referencia del array a otra variable
arr = [];
console.log(arr , arr2) ; // []


/* let arr = [1,2,3,4,5];
arr.length = 0; // Cambiar la longitud del array a 0
console.log(arr); // [] m
//* Eliminar todos los elementos del array */

/* let arr = [1,2,3,4,5];
arr.splice(0, arr.length); // Eliminar todos los elementos del array
console.log(arr); // []
 */

//! no se recomienda usar este metodo para vaciar un array
/* let arr = [1,2,3,4,5];
while(arr.length){
    arr.pop(); // Eliminar el último elemento del array
} */