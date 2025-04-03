/**
 * cuando queremos ejecutar una porcion de codigo
 * pero solamnete cuando se cumple una condicion
 * es cuando nosostros tenemos que user el if
 * 
 * Ejemplo de uso de la sentencia if
 */
/*
 *  1. Declaramos una variable edad
 * 2. Si la edad es mayor o igual a 18 se imprime "Puedes pasar"
 *  3. Si la edad es menor a 18 se imprime "No puedes pasar"
 *   
 */
let edad = 13;

/** 
 * * dentro del los parentesis del if se coloca la variable junto con la condicion que queremos evaluar
 * * si la condicion es verdadera se ejecuta el bloque de codigo 
 * * si la condicion es falsa se ejecuta el bloque de codigo del else
 * 
*/
if (edad >= 18) {
    console.log("Puede ver la pelicula de terror");
    
}else if (edad >=14 ){
    console.log("Puedes ver la pelicula de terror con un adulto");
}
    else {
    console.log("No puedes pasar");
    }
/*
 * if hace una evalucion de arriba hacia abajo y la primera condicionque se cumple es la que se ejecuta
 * si no se cumple ninguna de las condiciones se ejecuta el bloque de else
 */


