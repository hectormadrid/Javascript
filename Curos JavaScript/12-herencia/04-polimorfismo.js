/*
 *polimorfismo , poli significa muchos y morfismo significa formas
 *es cuando muchos objetos que se crearon a partir
 *de propiedades distintas y de funciones constructoras distintas, todas comparten exactamente un mismo
 *método.
 */

function Select() {}
Select.prototype.render = function () {
  console.log("Renderizando Select");
};

function Checkbox() {}
Checkbox.prototype.render = function () {
  console.log("Renderizando Checkbox");
};
let components = [new Select(), new Checkbox()];

components.forEach((c) => c.render());

/*
 * Nosotros lo podemos utilizar para mandar a renderizar todos los componentes que nosotros hayamos creado,
 *pero para hacerlo corto, un componente vendría siendo una funcionalidad pequeña que puede ser renderizada
 *dentro de un documento HTML.
 */
