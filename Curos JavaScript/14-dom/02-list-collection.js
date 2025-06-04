//HTMLCollection  

let collection = document.getElementsByTagName('p');
//NodeList
let list =  document.querySelectorAll('p');
console.log(collection, list);
//*con las htmlcollection nosotros podemos ir a buscar los elementos por su propiedad de name.
/* let item1 = collection.namedItem('Hector');
let item2 = collection.item(0);
let item3 = collection[3]; */

/*
*HTML Collection no tiene métodos ni formas que nosotros lo podamos iterar, al menos dentro del prototipo
*o los métodos de HTML Collection.
*/

//* iterar elementos

/* for (let el of collection)  nos muentro el objeto
    console.log(el);
 */


//Array.from(collection).forEach(x=>console.log(x));
//[...collection].forEach(x=>console.log(x)); // nos mostrará los elementos 


/* let item1 = list.item(3); // nos mostrará el primer elemento de la lista
let item2 = list[3]; // nos mostrará el primer elemento de la lista */

list.forEach(x=>console.log(x)); // nos mostrará los elementos de la lista

let entries = list.entries(); // nos mostrará los elementos de la lista con su índice
let keys = list.keys(); // nos mostrará los índices de la lista
let values = list.values(); // nos mostrará los valores de la lista
[...list].forEach(x=>console.log(x)); // nos mostrará los elementos de la lista