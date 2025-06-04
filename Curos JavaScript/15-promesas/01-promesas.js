/**
 * Las promesas se utilizan muchísimo cuando se realizan peticiones a otros servidores.
Esto nos va a servir para nosotros poder obtener datos desde algún lugar para que así le podamos mostrar
al usuario los datos que él ya haya guardado y también sincronizar los cambios que él haga.
Las promesas en JavaScript representan el estado de una petición y este estado podría ser pendiente
que esto viene del inglés Pending podría ser también rejected o rechazada, y finalmente esta también
puede ser terminada o completada, pero nosotros vamos a ver como que esto aparece como Fulfilled Pending
significa que la petición se encuentra pendiente, o sea que todavía se está realizando.
Rejected significa que algo ocurrió y esta promesa ha sido rechazada y fulfilled quiere decir que la
tarea que nosotros le destinamos a realizar a la promesa se cumplió con éxito.
Entonces, las promesas se utilizan para tareas como por ejemplo, realizar consultas a las bases de
datos.
También se utilizan para realizar peticiones a servidores o también se pueden utilizar para trabajar
con Webworkers.
Y estos webworkers se utilizan cuando se tiene que realizar un cálculo que podría ser muy pesado de
realizar para el explorador web.
 */

let promesa = new Promise ((resolve, reject) => {
    // Simulamos una tarea asíncrona
   // setTimeout(()=> resolve(42),10000);
   setTimeout(()=> resolve('hola mundo'),1000);


});

promesa.then(
    valor => console.log(valor),
    e => console.error('Error:', e),
)
