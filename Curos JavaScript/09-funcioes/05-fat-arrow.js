
//* las fat arrow funcionan no tienen la varaible arguments
//* tampoco cuentan con la funcion de super y this
//* las fat arrow funcionan deberian utilizarse para hacer calculos 
const suma = (a, b) => {
   return Array.from(arguments)
    .reduce((acc,el)=> acc + el);
/*   let total = 0;
  for (let valor of arguments) {
    total += valor;
  }
  return total; */
}

console.log(suma(1,2,3,4));