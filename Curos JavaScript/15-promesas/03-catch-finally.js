let promesa = new Promise((res, rej) => {
  rej(12);
});

let promesa2 = new Promise((res, rej) => {
  res(15);
});
// Encadenamiento de promesas
promesa
  .then((valor) => {
    if (valor > 10) {//si la primera promesa es mayor a 10
      return promesa2; // Retorna otra promesa
    }
  })
  .then((valor2) => {
    console.log("segunda promesa");
    return valor2;
  })
  .catch((e) => console.log(e))
  /*
  *este método de catch solamente se va a ejecutar si es que una de estas promesas
  *llegase a ser rechazada si no llegase a ser rechazada.
  *Este método jamás se va a ejecutar y se va a continuar ejecutando la cadena de manera normal.
   */ 
  .finally(() => console.log("finalmente se ha ejecutado la promesa"));
/*
* finally se va a ejecutar siempre.
*Da lo mismo si es que nuestras promesas tuvieron éxito o si es que alguna fue rechazada.
*Y también algo muy importante.
*Finally no recibe nunca un argumento.
   */
