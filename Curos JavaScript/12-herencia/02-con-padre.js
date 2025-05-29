/*
*Existen algunas situaciones donde es preferible llamar al constructor padre o a la función constructora
*padre en JavaScript para poder reutilizar alguna de las propiedades que está creando.
 */

function Entidad(entidad){
    this.id = Math.random().toString(20);
    this.entidad = entidad;

}

function User(){
    Entidad.call(this, 'user'); // Llamamos al constructor padre
    this.attrs ={
        name: 'John Doe',
        email: 'holamundo@gmail.com'
    }
}

const u = new User();
console.log(u); // Muestra un id aleatorio