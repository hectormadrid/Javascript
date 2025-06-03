const Entidad = {
    save(){
        console.log('guardado en  Entidad');
    },
}

const Actualizar = {
   update(){
        console.log('Actualizando en  Entidad');
    },
}
class User {
    constructor (name) {
        this.name = name; // propiedad de instancia
         
    }
    save() {
        console.log('guardado en User');
    }
} 
const nuevoProto= Object.assign({}, Entidad, Actualizar); // mezcla los objetos Entidad y Actualizar
Object.setPrototypeOf(User.prototype, nuevoProto); // mezcla  el objeto Entidad en el prototipo de User

const u = new User('hector')
u.save();