//*crear copias

 let obj1 = {
    id :1,
    nombre : "Juan",
 };

 function crearCopia(objeto){
    let copia = {}; // crea un objeto vacío

    for (let llave in objeto) { // recorre las propiedades del objeto
        copia[llave] = objeto[llave]; // agrega la propiedad al nuevo objeto
    }
    return copia; // devuelve el nuevo objeto
 }

 let obj2 = crearCopia(obj1); // { id: 1, nombre: "Juan" }
 console.log({obj1,obj2}); // { id: 1, nombre: "Juan" }