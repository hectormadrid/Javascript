const obj = {
    nombre: "Juan",
};

function extander (usuario){
    const metodos ={
        login (){
            console.log('Iniciando sesion', this.nombre);
        },
        logout (){
            console.log('Cerrando sesion', this.nombre);
        },
    };
    return Object.assign(usuario, metodos);
}

const usuario = extander(obj);
console.log(usuario); // { nombre: 'Juan', login: [Function: login], logout: [Function: logout] }
usuario.login(); // Iniciando sesion Juan