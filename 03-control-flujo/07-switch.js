// Ejemplo de switch en JavaScript
// El switch es una estructura de control que nos permite evaluar una expresión y ejecutar un bloque de código dependiendo del valor de esa expresión.
// La sintaxis del switch es la siguiente:
// switch (expresion) {
//     case valor1:
//         codigo a ejecutar si la expresion es igual a valor1
//         break;
//     case valor2:

let accion = 'agregar';// Puede ser cualquier tipo de dato: string, number, boolean, etc.
// depende de lo que la variable aaccion contenga, se ejecutara un bloque de codigo diferente
switch (accion) { //
    case 'listar':
        console.log('Listar');
        break;// Si no se pone el break, se ejecutan todos los casos siguientes
    case 'agregar':
        console.log('Agregar');
        break;
    case 'actualizar':
        console.log('Actualizar');
        break;
    case 'eliminar':
        console.log('Eliminar');
        break;
    default: // Si no se cumple ninguno de los casos anteriores, se ejecuta este bloque
        console.log('Opcion no valida');
}