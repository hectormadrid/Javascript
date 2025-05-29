function User() {
  this.name = "Hola Mundo";
  //metodo de instancia 
  //*se usa esta forma cuandono se quiere optimizar el codigo
  this.logger = function () {
    console.log('guardando usuario');
    this.login();
    
  }
}
// metodo de prototipo
//* se usa cuando se quiere crear una cadena de prototipos o optimizar el codigo
const user = new User();
const user2 = new User();

User.prototype.login = function () {
  console.log('iniciando sesión', this.name);
    
};

User.prototype.toString = function () {
 console.log('Usuario', this.name);
};
console.log(user.login())