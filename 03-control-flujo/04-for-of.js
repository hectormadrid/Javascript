// for
/*
 * Estructura de control que permite ejecutar un bloque de código un número determinado de veces.
 * Sintaxis:
 * for (inicialización ; condición/comparacion; incremento) {
 *     // código a ejecutar
 * }
 */
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        console.log('el numero par es : '+i);
    }
   
}
/*
*for es igual que while, pero  con menos codigo y mas facil de leer.

*/


// for of
/*
*Hasta ahora nosotros hemos visto el loop while, el loop do while y el loop for.
*Y lo que tienen en común estos tres es que nos permiten a nosotros calcular cómo vamos a realizar una
*iteración.
*Nosotros de manera manual tenemos que definir una variable y luego de definir la variable tenemos que
*indicarle la condición y luego qué se va a realizar después cuando se termine esa iteración.
*Pero si por alguna razón nosotros tenemos que iterar un listado de elementos como por ejemplo
*/
let animeles = ['perro', 'gato', 'loro', 'ratón', 'elefante'];

/*
* for of es un loop que nos permite a nosotros iterar un listado de elementos sin necesidad de
*definir una variable y sin necesidad de definir una condición.
* La sintaxis es la siguiente:
* for (let variable of listado) {}

* 
*/

for (let  animal of animeles) {
    console.log(animeles);
}

/*
* aca se usa el while para poder acceder a cada uno de los elementos del array
* y poder imprimirlos en consola.
*/
let i = 0;
while (i < animeles.length) {
    console.log(animeles[i]);
    i++;
}
