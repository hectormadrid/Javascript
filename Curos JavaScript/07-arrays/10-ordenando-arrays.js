//*Ordenando Arrays
/* let numeros= [11,32,23,44,-5];
 
numeros.sort();
numeros.reverse();

console.log(numeros); // -5, 11, 23, 32, 44 */

/* let letras = ['a','c','b','e','d'];

letras.sort();

console.log(letras); // a, b, c, d, e
/*El método sort() ordena los elementos de un array en su lugar y devuelve el array. */

/* let conMayuscuulas = ['d','F','h','Z']

conMayuscuulas.sort((a,b)=> { */
/**
 * a antesque b => -1
 * b antes que a => 1
 * si son iguales => 0
 */

/* let alower = a.toLowerCase();
let blower = b.toLowerCase();

if (alower < blower) {
    return -1;
}
if (alower > blower) {
    return 1;
}
return 0;
});

console.log(conMayuscuulas); // A,F,d, */


let usuario = [
    {edad : 23, nombre: 'Juan'},
    {edad : 18, nombre: 'Pedro'},
    {edad : 25, nombre: 'Ana'},
]

usuario.sort((a,b) => {
    if (a.edad < b.edad)  return -1;
    if (a.edad > b.edad)  return 1;
    return 0;

})

console.log(usuario); // [{edad : 18, nombre: 'Pedro'},{edad : 23, nombre: 'Juan'},{edad : 25, nombre: 'Ana'}]