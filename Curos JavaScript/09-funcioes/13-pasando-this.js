/* (function saludar (...rest){
    console.log(this ,rest);

}).bind({propiedad :'hola mundo'})(1,2) */
/* saludar.call({propiedad :'hola mundo'},1,5);//*los argumentos se pasan separados por comas
saludar.apply({propiedad :'hola mundo'},[1,5]); //*los argumentos se deben pasar como un array */

/* const usuario = {
    nombre: "Diego",
    ciudadanias: ["Chile", "Colombia", "New zealand"],
    mostrarCiudadanias() {
      this.ciudadanias.forEach(function (ciudadania) {
        console.log(this.nombre, ciudadania);
      }.bind(this)); // Usando bind para establecer el contexto de 'this'
    },
  };
  
  usuario.mostrarCiudadanias(); */

/*   const usuario = {
    nombre: "Diego",
    ciudadanias: ["Chile", "Colombia", "New zealand"],
    mostrarCiudadanias() {
        let self = this;
      this.ciudadanias.forEach(function (ciudadania) {
        console.log(self.nombre, ciudadania);
      }.bind(this)); // Usando bind para establecer el contexto de 'this'
    },
  };
  
  usuario.mostrarCiudadanias(); */
  const usuario = {
    nombre: "Diego",
    ciudadanias: ["Chile", "Colombia", "New zealand"],
    mostrarCiudadanias() {
      this.ciudadanias.forEach(function (ciudadania) {
        console.log(this.nombre, ciudadania);
      },this); // Usando bind para establecer el contexto de 'this'
    },
  };
  
  usuario.mostrarCiudadanias();