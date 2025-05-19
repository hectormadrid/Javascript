//**Agregar elementos a un array
const letras = ['a', 'b'];
letras.push('c','g'); // Agrega 'c' al final del array
letras.unshift('z','r'); // Agrega 'z' al inicio del array 
letras.splice(3,0,1,2); // Agrega 1,2,3 en la posición 2
console.log(letras); // ['a', 'b', 'c']