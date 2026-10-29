// for in
/*
*La instrucción de for in nos sirve para que nosotros podamos iterar las propiedades de un objeto y por
*qué nosotros queríamos realizar esto?
*Porque podría ser que tú no conozcas cuáles son las propiedades de dicho objeto, ya que estas podrían
*ser asignadas en el tiempo de ejecución de tu aplicación.
 */

// se delcara un objeto
let user = {
    id: 1,
    name: 'Juan',
    age: 34,
    country: 'CO'
}

// se utiliza el for in para iterar las propiedades del objeto
// y se imprime el nombre de la propiedad y su valor

// se declara una variebla pro para iterar las propiedades del objeto user
for (let User in user ){
console.log(User ,user[User]);

}

/*
*Pero recuerda, si vas a acceder a los elementos de un array, no utilices for in, utiliza for off.
*Esto te lo explico porque podría ser que te topes con código que ya tenga esto implementado.
*/
let animales = ['perro', 'gato', 'caballo', 'vaca', 'gallina', 'pato'];

for (let i in animales){
    console.log(i,animales[i]);
}   