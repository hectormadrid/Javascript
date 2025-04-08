// Ejercicio 1: Crear una función que reciba dos números y devuelva el mayor de ellos.
// se declara la funcion  y se resiven dos parámetros: a y b.
function cualEsMayor(a, b) {
    // se utiliza un operador ternario para comparar los dos números y devolver el mayor.
    return (a > b) ? a : b;
}
// se llama a la función con dos números y se almacena el resultado en la variable mayor.
// se imprime el resultado en la consola.
let mayor = cualEsMayor(10, 20);

console.log(mayor);