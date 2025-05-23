const usuario = [
    {edad : 17, nombre:'Hector', plan: 'Premium'},
    {edad : 18, nombre:'Juan', plan: 'Premium'},
    {edad : 32, nombre:'Pablo', plan: 'Free'},,
    {edad : 25, nombre:'Diego', plan: 'Gold'},
];

function groupBy(arr,Prop) {
    return arr.reduce((acc,el) => {
        let valor = el[Prop];
        acc[valor] = acc[valor] ? acc[valor] : [];
        acc[valor].push(el);
        return acc;

    },{});


}

const grupo = groupBy(usuario, "plan");
console.log({grupo});