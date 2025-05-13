//*cuales son los metodos de los objetos
//* se le pasa un objeto y se le devuelve un array con los metodos que tiene
let objeto = {
  id: 1,
  nombre: "juan",
  login: function () {},
  logout: function () {},
};
//*se crea una funcion que recorra el objeto y valide si es un metodo o no
function cualesMetodos(obj) {
  for (let llave in obj) {
    if (typeof obj[llave] === "function") {
      console.log(llave);
    }
  }
}

cualesMetodos(objeto);
