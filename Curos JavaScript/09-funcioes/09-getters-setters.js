const usuario ={
    nombre: 'Juan',
    apellido: 'Perez',
    get nombreCompleto () { /**esta es la forma para obtener el nombre completo */
        return `${usuario.nombre} ${usuario.apellido}`;
    },
    set nombreCompleto (valor){ /**esta es la forma para establecer el nombre completo */
        const [nombre, apellido] = valor.split(' ');
        this.nombre = nombre;
        this.apellido = apellido;
    }
};

usuario.nombreCompleto = 'Pedro Gomez'; // esta es la forma para establecer el nombre completo
console.log(usuario.nombreCompleto);