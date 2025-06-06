/* let nombre = 'Hector';
let apellido = 'Gomez';

function getNombreCompleto(nombre, apellido) {
   return [nombre, apellido].join(' ');

}

let fullName = getNombreCompleto(nombre, apellido);
console.log(fullName); // Hector Gomez
 */
/*
 * Principios de la Programación Orientada a Objetos (POO)
 *Esta se encarga de agrupar los datos y también las funcionalidades que tenga sentido agrupar.
 *ejemplo: un usuario tiene un nombre, un apellido, una edad, y también tiene funcionalidades como iniciar sesión, cerrar sesión, etc.
 * La POO se basa en 4 principios fundamentales:
 *1. Abstracción: Se refiere a la capacidad de ocultar los detalles complejos y mostrar solo la información esencial.
 * Por ejemplo, al interactuar con un objeto, no necesitamos saber cómo está implementado internamente, solo cómo usarlo.
 *2. Encapsulamiento: Este principio implica agrupar datos y métodos que operan sobre esos datos en una sola unidad, llamada objeto.
 * Esto ayuda a proteger los datos y a evitar que se acceda directamente a ellos desde fuera del objeto.
 *3. Herencia: Permite crear nuevas clases basadas en clases existentes, heredando sus propiedades y métodos.
 * Esto promueve la reutilización del código y la creación de jerarquías de clases.
 *4. Polimorfismo: Este principio permite que diferentes clases implementen métodos con el mismo nombre, pero con comportamientos diferentes.
 */

//* si tuvieremos que representar poo en javascript haciendo referecia al ejemplo de arriba, se vería de la siguiente manera:
//? Encapsulamiento: Agrupamos los datos y las funcionalidades en un objeto llamado usuario.
/* const usuario = {
    nombre: 'Hector',
    apellido: 'Gomez',
    getNombreCompleto: function() {
        return [this.nombre, this.apellido].join(' ');
    }
}

console.log(usuario.getNombreCompleto()); // Hector Gomez
 */

//? Abstraccion: Ocultamos los detalles de cómo se construye el nombre completo y solo mostramos la funcionalidad de obtenerlo.
/* const user = new User ();
user.password = '123456';
user.save(); */

//? Herencia: Creamos una clase Usuario que hereda de una clase Persona, reutilizando sus propiedades y métodos.
//User
//restaurante
//motociclista
//? Ejemplo de herencia en JavaScript
/*
 * en JavaScript para nosotros poder heredar métodos
 * y propiedades utilizamos funciones constructoras y así otras funciones constructoras que nosotros vayamos creando.
 * Pueden utilizar estos métodos y propiedades que nosotros le agregamos a la función constructora padre.
 */

//?Polimorfismo: Permitimos que diferentes clases implementen el método getNombreCompleto de manera diferente, 
//? adaptándose a sus propias necesidades.
function validarEntidad(entidad){
    //...

/*  switch(entidad.nombre){
        case 'Hector':
            console.log('Validando entidad Hector');
            break;
        case 'Maria':
            console.log('Validando entidad Maria');
            break;
        default:
            console.log('Entidad no reconocida');
    } */

    //* todo lo que se encuentra dentro de este switch se puede cambiar por un 
    entidad.save();

  /*
   * En el caso de motociclista, nosotros ahí tendríamos que implementar un método que se llame Save y se
*encargue de llamar a la API.
*En el caso del restaurante, ahí nosotros también podemos implementar un método que se llame Save y
*este vaya a guardar a la base de datos y en el caso de user este podría venir de un servicio de autenticación.
*Entonces ahí lo que hacemos es conectarnos con este servicio de autenticación para poder actualizar
*el usuario.
*De esta manera nosotros podemos realizar tres acciones completamente distintas, pero podemos aprovechar
*la lógica de una función que ya hemos creado. 
   */
}