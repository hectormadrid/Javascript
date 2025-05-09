function Usuario(){
    let id = 1; // * Propiedad privada, no se puede acceder desde fuera del objeto
    let log = function(){ // * Método privado, no se puede acceder desde fuera del objeto
        console.log('Logando...');
    }
    this.name = 'Lucas';

  
    this.guardar = function(){
        log(); // * Llamando al método login dentro del objeto
        console.log('Guardando...');
    }
}

const usuario = new Usuario();
 usuario.guardar(); // * Llamando al método guardar, que a su vez llama al método login