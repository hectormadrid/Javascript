const p1 = Promise.reject('fallo conexion ');
const p2 = Promise.reject(42);
const p3 = new Promise((res,rej)=>{
    setTimeout(rej,1000,'foo');
});
/* 
*todas la promesas tiene que resolverse si ese es el caso se ejecuta .then
*de lo contrario se una de las promesas es rechazada se ejecuta .catch

*/ 
/* Promise.all([p1,p2,p3])
.then(valores => console.log('all',valores))
.catch(e =>console.log('error en all',e))
 */
/*
*a diferecia de all,race nos retorna el valor de la primera promesa que se resuelva
*/
/* Promise.race([p1,p2,p3])
.then(valor => console.log('race',valor))
.catch(e =>console.log('error en race',e))
 */

/*
*Funciona muy parecido a Race con la diferencia que va a tomar la primera promesa que sea resuelta,
*pero si es que la primera promesa que se iba a resolver fue rechazada, en este caso en lo que va a
*hacer es ignorar esta respuesta y va a evaluar la siguiente promesa que sea, ya sea tanto resuelta o rechazada.
 */
/* Promise.any([p1,p2,p3])
.then(valor => console.log({valor}))
.catch(e => console.log({e})); */
/*
*si las promesas son resueltas o rechazadas, estas se van a envolver dentro de un objeto, el cual
*contiene la propiedad de status y también contiene la propiedad de Rison.
 */
Promise.allSettled([p1,p2,p3])
.then(valor => console.log({valor}))
.catch(e => console.log({e}))