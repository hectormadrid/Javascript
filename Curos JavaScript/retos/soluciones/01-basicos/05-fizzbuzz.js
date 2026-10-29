// Solución: el caso "divisible entre 3 y entre 5" va primero. Si fuera después,
// el 15 entraría antes en el if del 3 y devolvería "Fizz".
function fizzBuzz(numero) {
  if (numero % 3 === 0 && numero % 5 === 0) {
    return "FizzBuzz";
  } else if (numero % 3 === 0) {
    return "Fizz";
  } else if (numero % 5 === 0) {
    return "Buzz";
  }
  return numero;
}
