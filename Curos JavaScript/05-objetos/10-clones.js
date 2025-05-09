/*
*En este video vamos a ver cómo podemos clonar objetos de manera que dos variables no se encuentren apuntando
*necesariamente al mismo.
 */


let punto ={
    x:10,
    y:15,

};

/* Object.assign(punto, {z: 20}) //Este método nos permite a nosotros poder asignar las propiedades que se encuentran a la derecha en objetos de la izquierda.
 console.log(punto); */ //{x: 10, y: 15, z: 20}

//*De esta manera nosotros podemos tomar propiedades de un objeto y asignárselas a otro.

let referencia = Object.assign(punto, {z: 20 , x:1})
let  clonePunto = Object.assign({} ,punto, {z: 20 , x:1})

/* console.log(punto,clonePunto);  */
//console.log(referencia)

let copiaPunto = Object.assign({},punto) //De esta manera nosotros podemos clonar un objeto, de tal manera que no se encuentren apuntando a la misma dirección de memoria
/* console.log(copiaPunto, punto) //{x: 10, y: 15} {x: 10, y: 15}; */


let copiaPunto2 = {...punto} //Nos va a generar una copia exacta de este objeto de punto.

console.log(copiaPunto2)


//forma de clonar un objeto con un for in(antigua )
let punto2 = {};
for (let llave in punto) {
    punto2[llave] = punto[llave]
} //De esta manera nosotros podemos clonar un objeto, de tal manera que no se encuentren apuntando a la misma dirección de memoria
console.log(punto2) //{x: 10, y: 15}
