const url = "https://jsonplaceholder.typicode.com/todos/a";
fetch(url)
  .then((response) => {
    // return response.json();
    if (response.ok) {
      return response.text();
    }
    return Promise.reject(response.status);
  })
  .then((data) => console.log(data))
  .catch((message) => console.log({ message }));
/*
*Entonces para trabajar con fetch le pasamos la URL, Este nos va a devolver una promesa, la cual nosotros
*podemos ir encadenando independiente de si ocurre un error en el lado del servidor, Fetch nunca va
*a fallar, así que los errores no van a ser manejados con el catch.
*Nosotros vamos a tener que manejar la propiedad de OK que se encuentra dentro de response y esta propiedad
*de OK va a devolver falso siempre y cuando el código no se encuentre entre 200 y 299, que esos son
*los códigos que se manejan en HTTP para indicar que una petición tuvo éxito.
*Así que si es que esta petición devuelve un error con código 300 o mayor que eso, en ese caso la propiedad
*de OK nos va a devolver falso si no nos va a devolver true y en base a eso después nosotros debemos
*rechazar la promesa, si es que esto no es lo que nosotros queremos para después poder capturar todo
*dentro del catch.
    
     */
