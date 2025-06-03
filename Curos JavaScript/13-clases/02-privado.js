/* function User(a){
    let name = a;
    this.getName = function() {return name;}; // método de instancia

} */


class User{
    #name; // propiedad privada

    constructor(name){
        this.#name = name; // propiedad privada
        
    }
    #logger(){

}    getName() { // método de instancia
        return this.#name; // acceso a la propiedad privada
    }
}
const u = new User("Hola Mundo"); // instancia de la clase

/*
 *si es que vamos a crear propiedades privadas o métodos privados, tenemos
*que utilizar el símbolo de numeral(#) para poder acceder a estas.
*Dentro de la misma clase tenemos que utilizar el símbolo de numeral para poder referenciarnos a ella,
*tanto para las propiedades como para los métodos.
*Para poder crear un método privado tenemos que utilizar el símbolo de numeral y a estas nosotros no
*vamos a poder acceder desde la instancia, solamente lo vamos a poder hacer desde la misma clase.

*/