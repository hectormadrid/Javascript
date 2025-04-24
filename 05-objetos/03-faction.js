/*
 * faction , nos ayudan a crear objetos de una manera sencilla no repetitiva 
 */

// se puede crear una funcion que devuelva un objeto y se le pueden pasar los parametros que se necesiten para crear el objeto
//en este caso se crea un objeto usuario con los atributos name, email y activo
function crearUsuario(name, email){
    return  {
        email,
        name ,
        activo : true,
        recuperarClave : function(){
            console.log("recuperando clave");
        },
    };
}

let user1 = crearUsuario("juan", "juan@gmail.com");
let user2 = crearUsuario("tito", "tito@gmail.com");
console.log(user1);
console.log(user2);
