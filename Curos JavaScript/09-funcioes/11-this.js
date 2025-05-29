// this hace referencia al objeto que se tes utilizando en ese momento
//pero si  this no esta dentro de un obejto pero se usa en una funcion this hace referencia al objeto window
// y en el caso de node hace referencia al objeto global}
//new hace referencia al objeto que se esta creando en ese momento

// los metodos son funciones que estan dentro de un objeto
 const user = {
    name: 'Juan',
    login(){
        console.log(this);
    }
};

user.logout = function logout (){
    console.log(this);
}
user.logout();  // this hace referencia al objeto user


/* 
function log(){
    console.log(this);
}

log(); // this hace referencia al objeto window */

/* function Log(mensaje){
    this.mensaje = mensaje;
    console.log(this);

}

const l = new Log('Hola Mundo');  *///  
/**
 * Cuando usamos new, pasan 4 cosas:
 * se crea un obejto literal
 * se vincula este obejto a this
 * see vincula el prototipo
 * si no retorna nada, entonces retorna this
 * 
 */