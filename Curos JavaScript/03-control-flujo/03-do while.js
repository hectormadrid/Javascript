// do while

// aca se ejacuta  el codigo y luego se evalua la condicion
// en este caso si i es menor o igual a 10 se va a ejecutar el codigo
let i = 2;
/* while (i < 2) {
    if (i % 2 === 0) {
    console.log('numero par '+ i);
    }
    i++;
} */

//console.log('Fuera del do while');
//El loop de do while a diferencia del loop de while, lo que va a hacer es en lugar de evaluar la condición
// priomero se va a ejecutar el codigo y luego evaluar la condicion
// en este caso si i es menor a 2 se va a ejecutar el codigo
//la evaluación de la condición y si la condición se cumple, después vuelve a subir y se vuelve a ejecutar
//la porción de código.
do {
    if (i % 2 === 0) {
        console.log('es un numero par '+ i);
        }
        i++;

} while (i < 2);