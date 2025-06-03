class Entidad {
     constructor(id){
        this.id = id; // propiedad de instancia
        this.created_at = new Date(); // propiedad de instancia
    }
    save (){}
}


class User  extends Entidad { // hereda de Entidad con la palabra clave extends
    constructor(name){
        super(1);// llama al constructor de la clase padre Entidad , en este caso el constructor pide un id
        this.name = name; // propiedad de instancia
    }
}

const u = new User("Héctor"); // instancia de la clase User