/**
 * ejercicio 3
 * 
 * se crea una funcion que recibe un arreglo y un indice
 * si el indice es negativo o mayor al tamaño del arreglo se devuelve un mensaje de error
 * si no, se devuelve el elemento en la posicion del indice
 * 
 */
function getInx (arr, idx) {// recibe un arreglo y un indice
    if (idx < 0  || arr.length <= idx) {// verifica si el indice es negativo o mayor al tamaño del arreglo
        return 'Error: el índice no puede ser negativo';// o mayor al tamaño del arreglo
                
    }
 return arr[idx];// devuelve el elemento en la posicion del indice
}

let resultado = getInx([1, 2, 3, 4, 5], 2);// llama a la funcion con un arreglo y un indice
// el indice es 2 y el arreglo tiene 5 elementos
console.log(resultado);