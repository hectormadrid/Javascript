let el = document.createElement('p');

el.innerText = 'elemento agregado';

document.body.append(el); 

/* el.innerText = 'elemento agregado';

el.innerHTML='<ul><li> Hola Mundo</li></ul>' */

el.style ='background-color: red; fant-weight: bold;'
el.className='parrafo';
el.id='mi-parrafo1';
//!lo siguente no sirve
/* el.mipropiedad = 'mi propiedad personalizada'; */

el.setAttribute('mipropiedad', 'mi propiedad personalizada'); //agrega un atributo personalizado
el.getAttribute('mipropiedad'); //obtiene el atributo personalizado
el.hasAttribute('mipropiedad'); //verifica si existe el atributo personalizado