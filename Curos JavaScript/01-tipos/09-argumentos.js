//se le pueden pasar parametros a las funciones
function suma (a,b) {
    console.log (arguments);// se puede accerder a todos los valores que se estan pasando a la funcion 
    return a + b;

}

// y cuando se llama a la funcion se le coloca un arguemnto que es el que se pide al inicio de la funcion 
let resultado = suma (5, 6 , 1 , 2 ,3);

console.log (resultado);
console.log (typeof suma);

 