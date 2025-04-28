/*
* El ciclo while se utiliza para ejecutar un bloque de código mientras una condición sea verdadera.
* La sintaxis básica es:
* while (condición) {
*     // bloque de código a ejecutar
* } 
*/
// Ejemplo de uso del ciclo while
// Imprimir los números pares del 0 al 10
// Declaramos una variable i y la inicializamos en 0
// Usamos un ciclo while para iterar mientras i sea menor o igual a 10
// Dentro del ciclo, verificamos si i es par usando el operador módulo (%)
// Si i es par, lo imprimimos en la consola
// Incrementamos i en 1 para continuar con el siguiente número
// Cuando i sea mayor que 10, el ciclo se detendrá
// y se imprimirá "Fin del ciclo"

let i = 0;

while (i <= 10) {// Iniciamos el ciclo while con la condición de que i sea menor o igual a 10
    if (i % 2 === 0) {// Verificamos si i es par usando el operador módulo (%)
    console.log('es un numero par '+ i);// Si i es par, lo imprimimos en la consola
    }else{
        console.log('No es par ' + i);
    }
    i++; // Incrementamos i en 1 para continuar con el siguiente número
}

console.log('Fin del ciclo');