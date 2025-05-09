const saludo = 'Hola Mundo'; // string

const despedida = new String('Adios mundo'); // objeto String
/*
*JavaScript, como te había mencionado antes, se encarga de tomar estos strings y los envuelve en un
*objeto para que nosotros podamos realizar estos llamados y luego nos devuelve el valor original, o
*sea que nos va a ofrecer el comportamiento como si estamos trabajando con un objeto, pero en verdad
*no estamos trabajando con un objeto.
*/
console.log(typeof saludo); // string
console.log(typeof despedida); // object
console.log(saludo.length)// length es una propiedad que nos dice la cantidad de caracteres que tiene el string
console.log(saludo.indexOf('Mu')) // indexOf es un método que nos dice la posición de un string dentro de otro string
console.log(saludo.indexOf('MU')) // si no encuentra el string o un caracteer, devuelve -1
if (saludo.indexOf("Mu")>=0) { // se puede usar para validar si un string contiene un string o un caracter
    console.log("El string contiene Mu")
}

console.log(saludo.includes("Mu")) // includes es un método que nos dice si un string contiene otro string o un caracter devbuelve true o false
console.log(saludo.replace("Mundo", "Hector"))// replace es un método que nos permite reemplazar un string por otro string
let  saludo2 = saludo.replace("Mundo", "Hector") // y lo guarda en una nueva variable
console.log(saludo.replace("Mundo", "Hector"),saludo2)// replace es un método que nos permite reemplazar un string por otro string
console.log(saludo.toUpperCase()) // toUpperCase es un método que nos permite convertir un string a mayúsculas
console.log(saludo.toLowerCase()) // toLowerCase es un método que nos permite convertir un string a minúsculas
console.log(saludo.substring(0, 4)) // substring es un método que nos permite obtener una parte de un string

const espacios = "    Hola    mundo    ";
console.log(espacios.trim()) // trim es un método que nos permite eliminar los espacios en blanco al inicio y al final de un string
console.log(espacios.trimStart()) // trimStart es un método que nos permite eliminar los espacios en blanco al inicio de un string
console.log(espacios.trimEnd()) // trimEnd es un método que nos permite eliminar los espacios en blanco al final de un string
//*se puede utilizar para mostrar datos a los usuarios