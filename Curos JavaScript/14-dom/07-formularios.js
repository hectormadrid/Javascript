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
let render = ({ data, errors }) => {// Función para renderizar el formulario

  return `<form name='formulario'>
    <div>
    <label>Nombre:</label>
    <input name = "name" value =" ${data.name}"/>//
    ${errors.name || ""}// Si hay un error en el nombre, mostrarlo
    </div>
    <div>
    <label>Apellido:</label>
    <input name = "lastname" value"${data.lastname}"/>
    ${errors.lastname || ""}// Si hay un error en el apellido, mostrarlo
    </div>
    <div><button>Enviar</button></div>
    </form>`;
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
});
