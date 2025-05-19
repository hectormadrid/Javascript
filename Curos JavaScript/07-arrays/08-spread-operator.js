//* spread operator
let arr1 = [1, 2];
let arr2 = [5, 6];
let arr3 = [0,...arr1,3,4, ...arr2,7,8]//* de esta manera podemos combinar dos arrays y agregar elementos nuevos
let arr4 = [...arr3];
arr3.pop(); // elimina el último elemento del array
console.log(arr3,arr4); // [1,2]