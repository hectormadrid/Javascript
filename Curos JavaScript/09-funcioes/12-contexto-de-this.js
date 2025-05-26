const usuario = {
  nombre: "Diego",
  ciudadanias: ["Chile", "Colombia", "New zealand"],
  mostrarCiudadanias() {
    this.ciudadanias.forEach(ciudadania =>{
      console.log(this.nombre, ciudadania);
    });
  },
};

usuario.mostrarCiudadanias();
