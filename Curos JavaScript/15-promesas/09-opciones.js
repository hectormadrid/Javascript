const url = "https://jsonplaceholder.typicode.com/todos";
fetch(url,{
    method: 'POST' ,//por defecto va a tener el valo de get , put, patch, delete
    body: JSON.stringify({title: 'hola mundo'}),
    headers:{
        'Content-Type':'application/json',
        Authorization: 'api key'
    },
    cache : "no-cache"
     /*
    *Van a existir momentos donde tú no vas a necesitar eso.
    *Entonces para poder anular eso mismo tienes que agregar la propiedad de caché y aquí tú le indicas el
    *valor de no caché, pero además de no caché tenemos las siguientes opciones.
    *Default que como podrás creer, esta es la opción por defecto reload.
    *También tenemos force caché para que siempre me esté contestando desde el caché y la última opción es
    *la de only y caché, que con esta última opción, la de Only if caché, el servidor solamente te va
    *a enviar una respuesta siempre y cuando este ya haya calculado antes la respuesta y la haya guardado
    *dentro del caché.
     */
})
  .then((response) => {
    // return response.json();
    if (response.ok) {
      return response.text();
    }
    return Promise.reject(response.status);
  })
  .then(data => console.log(data))
  .catch(message => console.log({ message }));