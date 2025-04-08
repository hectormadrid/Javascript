/*
Ejercicio 4:
Imprimir los números del 0 al 10, los pares e inpares.
 */
let i = 0;
while (i <= 10) {// Iniciamos el ciclo while con la condición de que i sea menor o igual a 10
    if (i % 2 !== 0) {// Verificamos si i es par usando el operador módulo (%)
    console.log('inpar '+ i);// Si i es par, lo imprimimos en la consola
    }else{
        console.log('par ' + i);
    }
    i++; // Incrementamos i en 1 para continuar con el siguiente número
}

console.log('Fin del ciclo');