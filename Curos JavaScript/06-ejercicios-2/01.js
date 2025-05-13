//contruye usuarios con funcion constructor 
function Usuario(name, apellido) {//* se crea la funcion constructora, con el nombre de la clase y los parametros que va a recibir
    this.id = Math.random()//* se crea la propiedad id con un valor aleatorio
    this.nombre = name  //* se crea la propiedad nombre con el valor del parametro name
    this.apellido = apellido//* se crea la propiedad apellido con el valor del parametro apellido
}

let usuario = new Usuario('Hector', 'Gonzalez')//* se crea un nuevo objeto de la clase Usuario, con los valores de los parametros name y apellido */
let usuario2 = new Usuario('Juan', 'Gonzalez')
let usuario3 = new Usuario('Pedro', 'Gonzalez')
let usuario4 = new Usuario('Luis', 'Gonzalez')
let usuario5 = new Usuario('Maria', 'Gonzalez')
console.log(usuario);
console.log(usuario2);
console.log(usuario3);
console.log(usuario4);
console.log(usuario5);