const usuario = [
    {edad : 17, nombre:'Hector', plan: 'Premium'},
    {edad : 18, nombre:'Juan', plan: 'Free'},
    {edad : 32, nombre:'Pablo', plan: 'Free'},,
    {edad : 25, nombre:'Diego', plan: 'Gold'},
];

function getPaidUser (usuario){
    /* return usuario.filter(n => n.plan === 'Premium' || n.plan === 'Gold'); */
    return usuario.filter(n => n.plan !== 'Free');
}

console.log(getPaidUser(usuario))
