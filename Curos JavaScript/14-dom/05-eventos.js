let form = document.createElement('form');
form.id = 'mi-formulario';
let input = document.createElement('input');
input.setAttribute('type', 'text');
let btn = document.createElement('button');
btn.innerText = 'Enviar';
form.append(input, btn);
document.body.append(form);

//* todas la funciones que se asignen a un evento van a recibir un objeto 
form.onmouseenter = e =>{
    console.log('El mouse entro al formulario', e);
    
}

form.onmouseleave = e => {
    console.log('El mouse salio del formulario');
}

input.onfocus = e => {
    console.log('El input esta enfocado');
}

input.onblur = e => {
    console.log('El input perdio el foco');
}

input.onchange = e => {
    console.log('El input cambio su valor', e.target.value);
}

btn.onclick = e => {
    e.preventDefault(); // Evita que el formulario se envie
    console.log('El formulario se envio');
    console.log('Valor del input:', input.value);
}

btn.addEventListener('click', e => {
    e.preventDefault(); // Evita que el formulario se envie
    console.log('boton clickeado');
});