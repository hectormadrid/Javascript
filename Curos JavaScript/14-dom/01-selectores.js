//HTMLElement  
let  htmlElement = document.getElementById('cuerpo');


//HTMLCollection=> se parece a un array pero no lo es
let elementoRed = document.getElementsByClassName('red');


//NodeList 
let elementosHector =  document.getElementsByName('Hector');

//HTMLElement
let parrafos = document.getElementsByTagName('p');


//htmlElement
let el = document.querySelector('#cuerpo'); //Devuelve el primer elemento que coincida con el selector

//NodeList 
let els =document.querySelectorAll('p'); //Devuelve todos los elementos que coincidan con el selector

/*
*La diferencia es que HTML Collection no importa cuántas veces nosotros manipulemos o modifiquemos el
*DOM, esta siempre va a reflejar los últimos cambios que tiene el DOM.
*En cambio Nodelist esta no siempre va a sincronizar con los cambios que nosotros tengamos en el DOM.

*/

let plive = document.getElementsByTagName('p');
let pstatic = document.querySelectorAll('p');
console.log(plive, pstatic);

let nuevoP = document.createElement('p');
document.body.append(nuevoP);
console.log(plive, pstatic);