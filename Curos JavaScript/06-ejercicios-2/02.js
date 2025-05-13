//* Factory function
function crearUsuario(nombre,apellido,email,clave){//* se crea la funcion que va a crear el objeto, con los parametros que va a recibir */
    return {//* se crea el objeto y se le asignan las propiedades */
        id: Math.random(),
        nombre,
        apellido,
        email,
        clave,
        recuperarClave(){
            console.log("Recuperar clave");
        }
    }
}

console.log(crearUsuario("Juan","Pérez","juan@gmail.com","1234"));
console.log(crearUsuario("Maria","Gomez","maria@gmail.com","123456"));