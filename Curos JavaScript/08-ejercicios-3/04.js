const usuario = [
    {edad : 17, nombre:'Hector', plan: 'Premium'},
    {edad : 18, nombre:'Juan', plan: 'Premium'},
    {edad : 32, nombre:'Pablo', plan: 'Free'},,
    {edad : 25, nombre:'Diego', plan: 'Gold'},
];

function cantidadPremium(usuario){
 return usuario.reduce((acc, el)=> el.plan !== 'Premium' ? acc + 1 : acc, 0);
}
function cantidadMayores(usuario){
    return usuario.reduce((acc, el)=> el.edad >= 18 ? acc + 1 : acc, 0);

}
console.log(cantidadPremium(usuario),"usuarios tienen plan Premiun ") // 2
console.log(cantidadMayores(usuario ),'usuarios son mayores ') // 3