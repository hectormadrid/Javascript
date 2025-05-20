//*reduce
/* const numero =[1, 2, 3, 4];

const suma = numero.reduce((acc,el)=>{
    return acc + el ;
},0);


console.log(suma); //10 */


/* const anidado =[[1,2],3,[4,5]];

const plano = anidado
.reduce ((acc, el)=>acc.concat(el),[]);
console.log(plano); */

//* este metodose utiliza para buscar un elemento en un array si estos son muy grandes
const usuarios = [
    { edad : 18, nombre: "Juan" },
    { edad : 20, nombre: "Pedro" },
    { edad : 15, nombre: "Maria" },
    { edad : 13, nombre: "Ana" },
];

const indexado = usuarios.reduce((acc, el) => ({
 ...acc,
 [el.nombre]: el,
}), {});

console.log(indexado);
console.log(indexado["Juan"]);