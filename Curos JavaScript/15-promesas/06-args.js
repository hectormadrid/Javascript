

let promesa1 = user =>new Promise((res, rej) => {// Simulamos una operación asíncrona ,con argumentos
    res(user);
});

let promesa2 = user =>new Promise((res,rej)=>{// Simulamos una operación asíncrona
    res(user+', hola mundo');
});

promesa1('hector')// Llamamos a la primera promesa
.then(user => promesa2(user))// Llamamos a la segunda promesa con el resultado de la primera
.then(respuesta => console.log(respuesta))// Mostramos el resultado de la segunda promesa