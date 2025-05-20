//**every() y some()**
let usuario = [
    { id : 1 , activo : true },
    { id : 2 , activo : true },
    { id : 3 , activo : true },
]

/* let todosActivos = usuario.every(u =>{ /*
    console.log ('Todos activos' , u.id);
    return u.activo;
})

console.log(todosActivos); // false */

//*every se va a ejecutar  hasta que encuentre un valor en false
let algunoActivo =  usuario.some( u => {
    console.log (u.id);
    return u.activo;
}
);
console.log(algunoActivo); // true

//*some se va a ejecutar  hasta que encuentre un valor en true