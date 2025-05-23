const miArray = [ "hola",12,"mundo",{},{id:15},['lala'],]

function dividePorTipo (arr){
 return {
    numeros: arr.filter(n => typeof n === 'number'),
    strings: arr.filter(n => typeof n === 'string'),
    objetos: arr.filter(n => typeof n === 'object'),
    
 }
}

const resultado = dividePorTipo(miArray)
console.log(resultado); // [2,3,5,15]
