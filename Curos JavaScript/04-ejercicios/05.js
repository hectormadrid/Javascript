//ejercicio 5
//Crear una función que reciba un array de números y devuelva un objeto con dos propiedades: el número menor y el número mayor.
//Ejemplo:
//
let array = [1,2,3,55,66,-200,300,-4,5];// se crea un arreglo con numeros

function getMenorMayor (arr){// recibe un arreglo
    let menor = arr[0];// inicializa menor con el primer elemento del arreglo
    let mayor = arr[0];// inicializa mayor con el primer elemento del arreglo
    for (numero of arr ) {// recorre el arreglo
        menor = menor < numero ? menor : numero;
        mayor  = mayor > numero ? mayor : numero;
    }
    return {menor, mayor};// devuelve un objeto con el menor y el mayor
}

let numeros = getMenorMayor(array);// llama a la funcion con el arreglo
console.log(numeros);