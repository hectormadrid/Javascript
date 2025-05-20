//**Filter
const usuarios = [
    { edad : 18, nombre: "Juan" },
    { edad : 20, nombre: "Pedro" },
    { edad : 15, nombre: "Maria" },
    { edad : 13, nombre: "Ana" },
];


const mayores = usuarios.filter(usuario => usuario.edad >= 18); // Filtra los usuarios mayores de edad
const menores = usuarios.filter(usuario => usuario.edad < 18);// Filtra los usuarios menores de edad
console.log(mayores);
console.log(menores);

