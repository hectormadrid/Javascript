/* function User(name) { //function constructora
    this.name = name;
    this.instancia = function () {} //método de instancia
}

User.prototype.login = function () {
    console.log ('Hola Mundo');
}

 */

class User {
  constructor(name) {
    this.name = name; //propiedad de instancia
    this.instancia = function () {}; //método de instancia
  }

  activo = true; //propiedad de instancia

  logout ()  {
    //método de instancia
    console.log("Adiós Mundo");
  };
  login() {
    //método de clase
    console.log("Hola Mundo");
  }
}

const u = new  User("Hola Mundo"); //instancia de la clase
/*
 *los metodos se van a agregar al prototipo
 * Pero si por el contrario nosotros creamos una propiedad dentro del constructor y a esta propiedad nosotros
 *le asignamos una función, en ese caso este método va a ser parte del objeto mismo y no va a ser parte
 *del prototipo.
 * las clases no se izan pero si las funciones constructoras
 */
