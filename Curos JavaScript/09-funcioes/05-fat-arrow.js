
//* las fat arrow funcionan no tienen la varaible arguments
//* tampoco cuentan con la funcion de super y this
//* las fat arrow funcionan deberian utilizarse para hacer calculos

//! Este ejemplo da error A PROPÓSITO en el navegador: "arguments is not defined".
//! Demuestra que una fat arrow no tiene arguments. Para arreglarlo, usa el parámetro
//! rest: const suma = (...numeros) => numeros.reduce((acc, el) => acc + el);
const suma = (a, b) => {
   return Array.from(arguments)
    .reduce((acc,el)=> acc + el);
/*   let total = 0;
  for (let valor of arguments) {
    total += valor;
  }
  return total; */
}

console.log(suma(1,2)); 
