const usuario = [
    {edad : 17, nombre:'Hector', plan: 'Premium'},
    {edad : 18, nombre:'Juan', plan: 'Premium'},
    {edad : 32, nombre:'Pablo', plan: 'Free'},,
    {edad : 25, nombre:'Diego', plan: 'Gold'},
];


// obetener los usuario de pago, ordenar de mayor a menor edad y devolver el nombre 
const usuarioPago = usuario.filter(el => el.plan === 'Premium'|| el.plan === 'Gold');
const  mayor = usuario.sort((a,b) => {
    if (a.edad > b.edad) {
        return 1;
    } else if (a.edad < b.edad) {
        return -1;
    } else {
        return 0;
    }
});

const lista = usuarioPago.map( u=> `<li>${u.nombre}</li>` ) 

const html = `
<ul>
${lista.join('')}
</ul>
`

console.log(html);