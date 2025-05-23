function dividePortipo (arr){
    return arr.reduce((acc, el) => {
        let llave = typeof el;

        acc[llave] = acc[llave] ? acc[llave] : [];
        acc[llave].push(el);
        return acc;

    } ,{});


/*  return arr.reduce((acc, el) => {
    if (typeof el === 'number') {
        acc.numeros.push(el);
    } else if (typeof el === 'string') {
        acc.strings.push(el);
    } else if (typeof el === 'object') {
        acc.objetos.push(el);
    } else if (typeof el === 'boolean') {
        acc.objetos.push(el);
    }
    return acc;
 }, {numeros: [], strings: [], objetos: [], booleanos: []});
 */
}

const miArray =[
    "hola",
    12,
    true,
    "mundo",
    {},
    {id: 1},
    ['lala'],
]

let arr = dividePortipo(miArray);
console.log(arr)