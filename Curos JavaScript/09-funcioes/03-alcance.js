
let afuera =' estoy afuera';
function alcance() {
    afuera = 'estoy dentro';
  function saludo() {}
  var vieja = "ya no debes de usar esto ";
  let variable = "Hola Mundo";
  const constante = "Hola Mundo!";
} //* todo lo que esta dentro de la funcion es el alcance de la funcion
console.log(afuera);
alcance();
console.log(afuera);