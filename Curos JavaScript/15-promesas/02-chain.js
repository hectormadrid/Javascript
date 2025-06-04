let promesa = new Promise((res, rej) => {
  res(12);
});

let promesa2 = new Promise((res, rej) => {
  res(15);
});
// Encadenamiento de promesas
promesa.then((valor) => {
 if (valor > 10) {
    return promesa2; // Retorna otra promesa    
 }
  })
  .then((valor2) => {
    return valor2;
  });
