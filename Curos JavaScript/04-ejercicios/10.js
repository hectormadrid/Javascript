/*
* Ejercicio 10: Crear un array de longitud n y que sus elemntos sean numeros del 1 al n
*/
let n = 10;//se declara una variable que contendra el tamaño del array
function crearArray(n){
    let array = [];//se declara un array vacio
    for(let i = 0; i <= n; i++){//se recorre el array
        array.push(i);//se agrega el elemento al array
    }
    return array;//se retorna el array
}
let resultado = crearArray(n);//se declara una variable que contendra el resultado de la funcion
//se imprime el resultado en consola
console.log(resultado)