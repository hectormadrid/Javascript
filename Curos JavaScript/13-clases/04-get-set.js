class Restaurants {
    #timetable; // propiedad privada
    constructor(name){
        this.name = name; // propiedad de instancia
    }

    get timetable() {// get para acceder a un valor
        return this.#timetable; // getter
    }
    set timetable(value) {// set para asignar un valor
        let date = new Date(value); // setter
        let time = date.getTime(); // obtener el tiempo en milisegundos
        if (Number.isNaN(time)) { // validar si es un número
            throw new Error("Fecha Incorrecta"); // lanzar error si no es válido
        }
        this.#timetable = date; // asignar el valor a la propiedad privada
    }
}

const r = new Restaurants("Héctor"); // instancia de la clase
r.timetable = "2023-10-01"; // asignar un valor a la propiedad privada usando el setter