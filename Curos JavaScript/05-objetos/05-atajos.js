/*
*Todos los objetos que son creados en JavaScript contienen una propiedad que se llama constructor y esta
*propiedad nos indica con qué constructor fue creado este objeto, por lo que si nosotros creamos un
*objeto utilizando esta sintaxis, es exactamente lo mismo que nosotros lo creemos utilizando su propio
*constructor.
*/
let obj = {};
let obj2 = new Object();

/**
 * new Array(); []
 * new Boolean();  ""
 * new String(); 12
 * new Number(); true / false
 */


function Usuario (){
    this.nombre = "Juan";

}

let user = new Usuario();
console.log(user.constructor); // [Function: Usuario]


const s1 = "1+1";
const s2 = new String("1+1");

console.log(eval(s1) ,eval(s2)); // 1+1
console.log (s2.valueOf())