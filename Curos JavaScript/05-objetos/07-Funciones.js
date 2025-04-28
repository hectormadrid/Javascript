function Punto(x,y){
    this.x = x;
    this.y = y;
    this.dibujar = function(){console.log('dibujando..') }
}
/*
*las funciones pueden ser creadas utilizando el constructor de Function.
*Sin embargo, esto tienes que intentar no utilizarlo.
*Es mucho mejor que tú definas las funciones de esta manera.
*Y lo segundo es que existe un método llamado call y otro llamado apply que nos permiten a nosotros poder
*extender objetos que hayamos definido antes, como por ejemplo este punto, el cual contiene un eje
*Z, pero le falta el eje X y Y, además de un método para poder dibujarse.
*Y ahí es cuando nosotros aprovechamos de utilizar nuestra función de punto para poder extender este
*objeto y que este así tenga un eje Y tenga un eje X y que también tenga el método para poder dibujarse
*y apply hace exactamente lo mismo que call, con la diferencia que apply.
*Los argumentos se pasan como un array y en call los argumentos se pasan 1 a 1.
*/
let punto = { z:7 };
Punto.call(punto,1,2);

console.log(punto); // { z: 7, x: 1, y: 2, dibujar: [Function] }

// no se recomienda usar el constructor de objetos de esta manera, pero es posible hacerlo
/* const Point = new Function ('x','y', ` this.x = x;
    this.y = y;
    this.dibujar = function(){console.log('dibujando..'); }`);


const p  = new Punto(1,2);
console.log(p); */ 