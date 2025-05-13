// agregar ID

let objeto = {name : "Juan", apellido: "Gonzalez"}; // objeto original

function agregarId(objeto) {  // funcion que agrega la propiedad id al objeto
 if (typeof objeto == "object") { // verifica si el objeto es valido
    objeto.id = Math.random();// genera un id aleatorio
    return objeto;// devuelve el objeto modificado
 }
 else {// verifica si el objeto es valido
    return "El objeto no es valido";
 }


}// funcion que agrega la propiedad id al objeto

console.log(agregarId(objeto)); // imprime el objeto modificado
