/*
 *Las funciones en JavaScript también son objetos y estas se les consideran objetos de primera clase.
 *Esto quiere decir que las funciones como por ejemplo esta función constructora, pueden ser asignadas
 *a otras variables pasadas, como argumentos, a otras funciones o también retornadas de otras funciones
 *y además estas también tienen propiedades.
 */

function Usuario(nombre) {
  this.nombre = nombre;
}
//las funciones tiene propiedades como los objetos
console.log(Usuario.name);
console.log(Usuario.length);

//se pueden asignar funciones a variables

const U = Usuario;
let user = new U("Juan");
console.log(user);

//se pueden pasar como argumentos a otras funciones
//se resive primero la función y luego el argumento
function of(Fn, arg) {
  return new Fn(arg);
}
 //aca se declara una variable y se llama a la funcion of que llama a la función Usuario y le pasa el argumento "Pedro"
let Usuario2 = of(Usuario, "Pedro");
console.log(Usuario2);

// se pueden retornar de otras funciones 
function returned (){
    return function (){
        console.log("Retornando una función");
    }
}
// y aca se guarda en una variable la función retornada
let retonarfuncion = returned();
retonarfuncion();

