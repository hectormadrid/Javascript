class Restaurants {
    static cantidad = 12;
  constructor(name) {
    this.name = name; // propiedad de instancia
  }

  getTimetable() {
    console.log("horario de atención");
  }

 static getRestaurant(id) {
    return new Restaurants('hector'); // método estático
  }
}

const r = Restaurants.getRestaurant(12); // instancia de la clase

const arr = new Array();

