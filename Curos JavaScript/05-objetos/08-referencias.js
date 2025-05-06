/*
* vimos los tipos primitivos y también los tipos por referencia para recordarte que
*los primitivos son strings, numbers, booleans, null y undefined, y los por referencia son los objetos,
*los arrays y las funciones.

*/

let a = { prop: 1 }; 

function suma(n){
    n.prop++;
}

suma(a);
console.log(a); // 1


/*
*Entonces, para recapitular, los tipos de datos primitivos se copian cuando los asignamos a otras variables
*y los de referencia  se crea una referencia, entonces se referencian
*y estos son los objetos, los array y también las funciones.
*
*
*
*
*/