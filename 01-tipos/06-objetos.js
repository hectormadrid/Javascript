// personaje de tv

let nombre = "Tanjiro";
let anime = "Demon slayer";
let edad = 16;


//objetos literal
let personaje = {
    nombre: "Tanjiro",  
    anime: "Demon Slayer",
    edad : 16,

}


console.log (personaje);
console.log (personaje.nombre);
console.log (personaje["anime"]);

// si se sabe  el nombre de la propiedad se usa este metodo
personaje.edad = 13;

//si no se conoce la propiedad y se desea iterar se usa este metodo
personaje["edad"] = 18;
 

//eliminar pripiedad del obejto
delete personaje.anime

console.log(personaje)