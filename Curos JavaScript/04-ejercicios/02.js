// Ejercicio 2
//escribir una resolucion de pantalla y devolver el nombre de la resolucion
//se declara la funcion con el nombre de la funcion y los parametros que recibe
function nombreResolucion (ancho, alto) {
    //se evalua la resolucion de la pantalla
 if (ancho >=  7680 && alto >= 4320) {//si la resolucion es 7680x4320
    // se retorna el nombre de la resolucion
    return "4k";
 } else if (ancho >= 1920 && alto >=  1080) {
    return "Full HD";
 } else if (ancho >=  1280 && alto >=  720) {
    return "HD";
 } else if (ancho >= 640 && alto >=  480) {
    return "SD";
 } else {
    return "No soportado";
 }

}

//se llama a la funcion y se le pasan los argumentos
let nombre = nombreResolucion(1920, 1080);
//se imprime el resultado en la consola
console.log(nombre);