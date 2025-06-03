class Entidad {
    constructor(id) {
        this.id = id;
        this.created_at = new Date();
      
    }
    save() {
        console.log('save en Entidad');

    }
}

class User extends Entidad {
    constructor(name) {
        super(1); // Llama al constructor de la clase padre Entidad
        this.name = name; // Propiedad de instancia
    }
    save() {
        super.save(); // Llama al método save de la clase padre Entidad
        console.log('save en User');
         // Llama al método save de la clase padre Entidad
    }
}

const u = new User("Héctor"); // Instancia de la clase User