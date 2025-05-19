//* Fat arrow functions

/*
*cuando se declara una fat arrow function no se usa la palabra function y 
*simepre sera anonima , a no ser que se asigne a una variable 
*/
const hola = mensaje => mensaje + 'Hola Mundo'; // es una funcion anonima
const hola2 = (mensaje) =>{ 
    return mensaje + 'Hola Mundo';
}

//*cuando se tiene un solo parametro no es necesario usar parentesis


const resultado = hola('hector');
console.log(resultado);