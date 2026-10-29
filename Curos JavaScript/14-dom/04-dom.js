let el = document.createElement('p');
el.innerText = 'Elemento creado';

//el metodo de append permite agregar texto y nodos

document.body.append(el);


el.remove(); // Elimina el elemento del DOM 

document.body.prepend(el); // Agrega el elemento al inicio del body


let div = document.createElement('div');
div.innerText = 'soy un texto';

el.replaceWith(div); // Reemplaza el elemento con otro

document.body.replaceChild(el,div); // Reemplaza un hijo del body con otro elemento
document.body.removeChild(el,div); // remueve un hijo del body
document.body.appendChild(el,div); //  Agrega un hijo al body (solo resive nodos)

document.body.insertBefore(div,el) // Inserta un elemento antes de otro elemento
document.body.insertAdjacentElement('beforebegin', div); // Inserta un elemento antes del body
document.body.insertAdjacentElement('afterbegin', div); // Inserta un elemento al inicio del body
document.body.insertAdjacentElement('beforeend', div);// Inserta un elemento al final del body
document.body.insertAdjacentElement('afterend', div); // Inserta un elemento despues del body

document.body.insertAdjacentHTML('beforebegin', '<p>Hola</p>'); // Inserta HTML antes del body
document.body.insertAdjacentText('afterbegin', 'Hola'); // Inserta texto (no HTML) al inicio del body