let validate = (data) => {// Función para validar los datos del formulario
  let errors = {};// Objeto para almacenar los errores
  if (!data.name) {// Si el nombre está vacío, añadir un error
    errors.name = "El nombre es obligatorio";
  }
  if (!data.lastname) {// Si el apellido está vacío, añadir un error
    errors.lastname = "El apellido es obligatorio";
  }
  return errors;
};
let initailValues = {// Valores iniciales del formulario
  name: "",
  lastname: "",
};
let render = ({ data, errors }) => {// Función para renderizar el contenido del formulario
  // Solo devuelve lo que va dentro: el <form> se crea más abajo con createElement.
  // Si hay un error en un campo, se muestra al lado (errors.name || "" evita que salga "undefined").
  // Ojo: dentro de un template literal no se pueden poner comentarios con //, se verían en la página.
  return `
    <div>
    <label>Nombre:</label>
    <input name = "name" value ="${data.name}"/>
    ${errors.name || ""}
    </div>
    <div>
    <label>Apellido:</label>
    <input name = "lastname" value ="${data.lastname}"/>
    ${errors.lastname || ""}
    </div>
    <div><button>Enviar</button></div>`;
};

let form = document.createElement("form"); // Crear un elemento de formulario
form.innerHTML = render({ data: initailValues, errors: {} }); // Renderizar el formulario con los valores iniciales y sin errores
document.body.append(form); // Añadir el formulario al cuerpo del documento

form.addEventListener("submit", (e) => {// Manejar el evento de envío del formulario

  e.preventDefault();
  let data = Array.from(e.target.elements).reduce((acc, el) => {// Reducir los elementos del formulario a un objeto
    if (!el.name) return acc; // Ignorar elementos sin nombre
    acc[el.name] = el.value;
    return acc;
  }, {});

  const errors = validate(data);// Validar los datos del formulario
  if (Object.keys(errors).length > 0) {// Si hay errores, renderizar el formulario con los errores
    let html = render({ errors, data });// Renderizar el formulario con los errores
    form.innerHTML = html;
    return;
  }
  console.log("Formulario enviado:", data); // Si no hay errores, mostrar los datos enviados
  form.innerHTML = render({ data: initailValues, errors: {} }); // Vaciar el formulario
});
