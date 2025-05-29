
function getProto(u){
   return Object.getPrototypeOf(u);
}
function Entidad(){}

Entidad.prototype.save = function() {
    console.log('Guardando entidad');
}
function User() {}
//*Method Override : ivalidar, reemplazar o anular un método de la clase padre en la clase hija
User.prototype.save = function() {
    console.log('Guardando usuario');
}



Object.setPrototypeOf(User.prototype, Entidad.prototype);

const u = new User(); // Guardando entidad  

console.log (getProto(getProto(u)).save());