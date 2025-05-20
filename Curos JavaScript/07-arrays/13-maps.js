//**MAPS
const usuarios = [
    { edad : 18, nombre: "Juan" },
    { edad : 20, nombre: "Pedro" },
    { edad : 15, nombre: "Maria" },
    { edad : 13, nombre: "Ana" },
];

 const lista = usuarios
 .filter(usuario => usuario.edad >= 18) // Filtra los usuarios mayores de edad
 .map(usuario => `<li> ${usuario.nombre} </li>`); // Crea una lista con los nombres de los usuarios

const html = ` <ol> ${lista.join('')} </ol`; // Convierte la lista en una cadena HTML
console.log(lista);
console.log(html);


/* const mapped = usuarios.map(usuario =>({
        ...usuario,
        mayor: usuario.edad >= 18,
    
}))
console.log(mapped); */