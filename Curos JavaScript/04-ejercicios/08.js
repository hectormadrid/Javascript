/*
* ejercicio 8 : crear algoritmo que tome un array de objetios y devuelva un array de pares
 */
//ejemplo
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

//se declara un array de pares
let pares = [
    [1, {id : 1 , nombre : 'juan'}],
    [2, {id : 2 , nombre : 'pedro'}],
    [3, {id : 3 , nombre : 'maria'}],
]

//se declara una funcion que tome un array de objetos y devuelva un array de pares
function mostrarPares(arr){
    let resultado = []// se declara un array vacio
    for (idx in arr){// se recorre el array segun el indice (idx se utiliza para referenciar el indecie de los array)
        let elemento = arr[idx]
       resultado[idx] = [elemento.id, elemento.nombre ,elemento]
    }
    return resultado// se retorna el array resultado
}

let resultador = mostrarPares(array)// se declara una variable que contendra el resultado de la funcion
//se imprime el resultado en consola
console.log(resultador)