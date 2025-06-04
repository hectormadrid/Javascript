let promesa = new Promise((res, rej) => {
  res(5);
});

let promesa2 = new Promise((res, rej) => {
  res(15);
});
// Encadenamiento de promesas
promesa
  .then((valor) => {
    if (valor > 10) {// si la primera promesa es mayor a 10
      return promesa2; // Retorna otra promesa
    }
    //metodos estaticos de las promesas
   //return Promise.reject('El valor es menor  a 10'); // Retorna una promesa rechazada
   return Promise.resolve('555');
  })
  .then((valor2) => {
    console.log("segunda promesa" ,valor2);
    return valor2;
  })
  .catch((e) => console.log(e))
  .finally(() => console.log("finalmente se ha ejecutado la promesa"));

/**
*De esta manera, incluso si es que hay algo que esté fallando dentro de nuestras promesas, pero que
*nosotros aún así queremos volver a evaluar, podemos de manera pragmática crear una nueva promesa para
*que esta siga dentro de la cadena.
 */