// dinamicos
/*
*En JavaScript los objetos son dinámicos.
*Esto quiere decir que tú puedes agregar o quitar propiedades a tu antojo y además les puedes cambiar
*su valor en cualquier momento.
 */
const user = {id :1};/**Cuando nosotros definimos una variable con la palabra reservada de const, no podemos cambiarle el valor
a esta misma variable, pero si es que el valor que nosotros le asignamos es un objeto, sí podemos
cambiarle el valor a las propiedades de este objeto, o también podemos agregarle más propiedades o
también podemos quitarle.
Lo que no podemos hacer es que deje de ser un objeto. */ 


user.name = "Juan";// Agregando una propiedad al objeto
user.guardar = function(){// Agregando un método al objeto
    console.log("Guardando en base de datos" , user.name);// Imprimiendo el valor de la propiedad name
}

user.guardar();// Llamando al método guardar

delete user.name;// Eliminando la propiedad name
delete user.guardar;// Eliminando el método guardar
console.log(user);// {id: 1} // Imprimiendo el objeto user sin la propiedad name y el método guardar

/* const user1 = Object.freeze({id:2}); // Congela el objeto, no se pueden agregar ni eliminar propiedades */
const user1 = Object.seal({id:2}); // Sella el objeto, no se pueden eliminar propiedades pero si se pueden agregar
user1.id = 3; // Se puede cambiar el valor de las propiedades
console.log(user1); // {id: 1}