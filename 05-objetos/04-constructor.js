// Constructor de objetos en JavaScript
// Crear un objeto Pd para crear un constructor el nombre debe enpezar con mayuscula ya sea nombre o palabra

//3
function Usuario() {
  this.id = 1;
  this.recuperarClave = function () { //ahora las funciones que se declara dentro de un objeto se llaman metodos
    console.log("Recuperar clave");
  };
}

//cuando se usa  new se crea un objeto nuevo y se le asigna el prototipo de la funcion
// y se le asigna el this al objeto creado

let usuario = new Usuario();
console.log(usuario);