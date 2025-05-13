//* propiedad existente


let objeto = {
  id: 1,
  nombre: false,
  login: function () {},
  logout: function () {},
};

let propiedad = 'nombre'; // propiedad a buscar
//* La función tieneProp recibe un objeto y una propiedad, y devuelve true si la propiedad existe en el objeto, o false si no existe.
function tieneProp(obj, propiedad) {
    let props = Object.keys(obj); // obtiene las propiedades del objeto

    for (let prop of  props){
        if (propiedad === prop) {
            return true; // si la propiedad existe devuelve true
        }
    }
    return false; // si no existe devuelve false
}

console.log(tieneProp(objeto, propiedad)); // true
