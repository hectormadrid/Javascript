const punto= {
    x: 10,
    y: 15, 
    dibujar(){ 
        console.log('Dibujando...');
    }
};
//delete punto.dibujar; // * Eliminar un método de un objeto
if('dibujar' in punto){ // * Verificar si es que un obejto tiene alguna propiedad o método
punto.dibujar(); 
}

//let keys = Object.keys(punto); 
console.log(Object.keys(punto)); // * Imprime las propiedades del objeto en un array


for(let llave of Object.keys(punto)){ // * Recorre las propiedades del objeto
    console.log(llave, punto[llave]); // * Imprime la llave y el valor de la propiedad
}

for (let entry of Object.entries(punto)){ // * Recorre las propiedades del objeto y sus valores
    console.log(entry); // * Imprime la llave y el valor de la propiedad
}



for(let llave in punto){ // * Recorre las propiedades del objeto
    console.log(llave, punto[llave]); // * Imprime la llave y el valor de la propiedad
}

/*
* Esta funcionalidad es relativamente nueva.
*Podría ser que tú te topes con código antiguo en JavaScript que fue escrito de esta manera para poder
*acceder a sus propiedades.
*Así que si necesitas mantener código viejo, ya sabes qué es lo que hace esto, pero deberías siempre
*preferir este que aparece acá.
*Y ahora voy a aprovechar de explicarte algo muy corto.
*Hasta ahora nosotros hemos estado viendo que Object, el constructor de Object también tiene métodos.
*Cuando un constructor en JavaScript tiene métodos como por ejemplo keys y entries, a estos se le llaman
*métodos de clase o métodos estáticos.
 */