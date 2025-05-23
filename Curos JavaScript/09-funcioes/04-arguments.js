function suma (a, b) {
   return Array.from(arguments)
    .reduce((acc,el)=> acc + el);
/*   let total = 0;
  for (let valor of arguments) {
    total += valor;
  }
  return total; */
}

console.log(suma(1,2,3,4));