let serialize = (target) =>
  Array.from(target.elements).reduce((acc, el) => {
    if (!el.name) return acc;
    acc[el.name] = el.value;
    return acc;
  }, {});
// escapa los caracteres especiales para que el texto del usuario no se interprete como HTML
let escapeHTML = (str) =>
  String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
class User {
  static #url = "https://jsonplaceholder.typicode.com/users"; // # para hacer privada y static par que solo se use en la clase
  static #users = [];
  static #ul = document.createElement("ul");
  static #form = document.createElement("form");
  static #initialValues = {
    name: "",
    email: "",
  };
  constructor(data) {
    this.name = data.name;
    this.email = data.email;
  }
  static async getAll() {
    try {
      const response = await fetch(this.#url);
      if (!response.ok) throw response;
      this.#users = await response.json();
      return this.#users;
    } catch (e) {
      console.log("error", e);
    }
  }

  static renderUser(u) {
    let li = document.createElement("li");
    li.innerText = u.name;
    return li;
  }

  static render() {
    let users = this.#users;
    users.forEach((u) => this.#ul.appendChild(this.renderUser(u)));

    return this.#ul;
  }

  static onSubmit(e) {
    e.preventDefault();
    let data = serialize(e.target);
    let user = new User(data);
    const errors = user.validate();
    if (Object.keys(errors).length > 0) {
      this.#form.innerHTML = this.formHTML({ data, errors });
      return;
    }
    user.save();
  }
  save() {
    return User.save(this);
  }
  static async save(user) {
    try {
      const response = await fetch(this.#url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });
      if (!response.ok) throw response;

      const data = await response.json();
      this.#users.unshift(data);
      this.#ul.prepend(this.renderUser(data));
      // se vacia el formulario despues de guardar
      this.#form.innerHTML = this.formHTML({
        data: this.#initialValues,
        errors: {},
      });
    } catch (e) {
      console.log("error", e);
    }
  }

  validate() {
    let errors = {};
    if (!this.name) {
      errors.name = "nombre obligatorio";
    }
    if (!this.email) {
      errors.email = "email obligatorio";
    }
    return errors;
  }
  static formHTML({ data, errors }) {
    // solo el contenido: el <form> ya existe en this.#form
    return `
        <div>
        <label>Nombre:</label>
        <input name = "name" value ="${escapeHTML(data.name)}"/>
        ${errors.name || ""}
        </div>
          <div>
        <label>Correo:</label>
        <input name = "email" value ="${escapeHTML(data.email)}"/>
        ${errors.email || ""}
        </div>
        <input type ="submit" value= "Enviar" />`;
  }
  static renderForm() {
    this.#form.onsubmit = this.onSubmit.bind(this);
    this.#form.innerHTML = this.formHTML({
      data: this.#initialValues,
      errors: {},
    });

    return this.#form;
  }
}
async function main() {
  const users = await User.getAll();
  const template = User.render();
  const form = User.renderForm();
  document.body.insertAdjacentElement("afterbegin", template);
  document.body.insertAdjacentElement("afterbegin", form);
}
main();
