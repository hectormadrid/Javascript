const saludo = "Hola \\ mundo \nbienvenido a \t \" Utimate JavaScript\"    ";//
const nombre = "Hector";
const apellido = "Gonzalez";
const nombreCompleto = nombre + ' ' + apellido;
function plantilla() {
    return `Hola ${nombre},
bienvenido a "Utimate JavaScript"    `;
}
console.log(plantilla('hector'));
/*
*Entonces la gracia de estos template strings es que nosotros podemos definir nuestras propias plantillas
*de texto que por alguna razón tengamos que enviarle a los usuarios, como por ejemplo podría ser un
*correo de bienvenida, otro correo donde le estemos mandando promociones a los usuarios o sencillamente
*algún texto que le vayamos a mostrar dentro de alguna aplicación y que en una parte de este le vayamos
*a reemplazar, por ejemplo, el nombre de usuario.

*/