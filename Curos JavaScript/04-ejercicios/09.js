/*
* ejercicio 9 : crear algoritmo que devuelva un array de obejtos en base a pares
 */

//se declara un array de pares
let pares = [
    [1, { nombre : 'juan'}],
    [2, { nombre : 'pedro'}],
    [3, { nombre : 'maria'}],
]

//se declara un array de objetos
let array = [{
    id : 1 ,
    nombre : 'juan',
},{
    id : 2 ,
    nombre : 'pedro',
},{
    id: 3 ,
    nombre : 'maria',
}
]

//se declara una funcion que tome un array de pares y devuelva un array de objetos

function coleccion(arr){
 let resultado = [];//se declara un array vacio
 for (idx in arr){// se recorre el array segun el indice (idx se utiliza para referenciar el indecie de los array)
     let elemento = arr[idx];// se declara una variable que contendra el elemento del array
     resultado[idx] = elemento[1];// se agrega el elemento del array al array resultado
     resultado[idx].id = elemento[0];// se agrega el id del elemento del array al array resultado
 }
 return resultado;// se retorna el array resultado
}

let resultador = coleccion(pares)// se declara una variable que contendra el resultado de la funcion
//se imprime el resultado en consola
console.log(resultador)