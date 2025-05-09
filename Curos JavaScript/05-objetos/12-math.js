console.log(
    Math.PI,//devuelve el valor de pi : 3.141592653589793
    Math.abs(-15),//devuelve el valor absoluto de un número: 15
    Math.round(15.5),//devuelve el valor redondeado de un número : 16
    Math.floor(15.1),//devuelve el valor redondeado hacia arriba de un número : 15
    Math.ceil(15.1),//devuelve el valor redondeado hacia abajo de un número : 16
    Math.pow(2, 3),//devuelve el valor de un número elevado a otro número : 8
    Math.sqrt(16),//devuelve la raíz cuadrada de un número : 4

);

console.log(Math.random());//devuelve un número aleatorio entre 0 y 1

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(random(1, 10));//devuelve un número aleatorio entre 1 y 10