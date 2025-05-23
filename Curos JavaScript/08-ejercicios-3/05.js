const usuario = [
  { edad: 17, nombre: "Hector", plan: "Premium" },
  { edad: 18, nombre: "Juan", plan: "Premium" },
  { edad: 32, nombre: "Pablo", plan: "Free" },
  { edad: 25, nombre: "Diego", plan: "Gold" },
];

function obtenerMayor(arr) {
  let mayor = arr[0];
  for (let usuario of arr) {
    if (mayor.edad < usuario.edad) {
      mayor = usuario;
    }
   
    /* return usuario.reduce((acc, el) => el.edad > acc.edad ? el : acc); */
  }
   return mayor;
}
console.log(obtenerMayor(usuario)); // 32
