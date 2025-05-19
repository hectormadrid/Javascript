//* Buscar referencias

const usuarios = [
    { id : 1, nombre : 'hector' },
    { id : 2, nombre : 'fernando' },
];

/* const resultado = usuarios.indexOf({ id : 1, nombre : 'hector' }); // -1 */

/* const resultado = usuarios.find(function(usuario){ //* find recibe una funcion
    return usuario.id === 1; // devuelve el primer elemento que cumpla la condicion, devulve el primer 
}); */

const resultado = usuarios.findIndex(usuarios =>  //* se utiliza una fat arrow function para que sea mas corto 
///* y se usa findIndex para saber la posicion del elemento que cumpla la condicion
   usuarios.id === 1); 

console.log(resultado); // -1
