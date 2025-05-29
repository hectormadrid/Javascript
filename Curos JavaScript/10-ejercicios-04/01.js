const obj = {
    nombre: "Juan",
};

function Extender(){
 this.login = () =>{
    console.log('Iniciando sesion',this.nombre);
 }
    this.logout = () => {
        console.log('Cerrando sesion', this.nombre);
    }
}

Extender.call(obj)


console.log(obj); // { nombre: 'Juan' }
obj.login(); // Iniciando sesion Juan
obj.logout(); // Cerrando sesion Juan