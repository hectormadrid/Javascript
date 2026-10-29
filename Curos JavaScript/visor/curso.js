// Índice del curso que usa lecciones.html.
// Cada módulo es una carpeta del proyecto y cada lección es un archivo .js de esa carpeta.
// Si añades un archivo nuevo al curso, agrégalo aquí para que aparezca en el visor.
//
// Campos de una lección:
//   archivo: nombre del archivo dentro de la carpeta del módulo
//   titulo:  nombre que se muestra en el visor
//   pagina:  (opcional) HTML y CSS que la lección necesita en la página
//   red:     (opcional) true si la lección pide datos a internet
//
// Los módulos con retos: true son ejercicios SIN resolver que se comprueban con retos/probar.js.
// Su solución está en la misma ruta dentro de retos/soluciones/.

const DESCRIPCION_RETOS =
  "Ahora te toca a ti. Cada archivo trae el enunciado y una función vacía: escribe tu solución en tu editor, guarda y pulsa «Ejecutar de nuevo». Las pruebas te dirán qué funciona (✅) y qué falla (❌).";

const PAGINA_SELECTORES = {
  html: `
    <div id="cuerpo">
      <p class="red" name="Hector">Párrafo 1 · class="red" name="Hector"</p>
      <p class="red">Párrafo 2 · class="red"</p>
      <p name="Hector">Párrafo 3 · name="Hector"</p>
      <p>Párrafo 4</p>
    </div>`,
  css: `.red { color: #c0392b; }`,
};

const CURSO = [
  {
    carpeta: "01-tipos",
    titulo: "Variables y tipos de datos",
    nivel: "Básico",
    descripcion:
      "El punto de partida: cómo guardar datos en variables (let y const), qué tipos de datos existen y una primera mirada a objetos, arrays y funciones.",
    lecciones: [
      { archivo: "01-varables.js", titulo: "Variables (let)" },
      { archivo: "02-primitivos.js", titulo: "Tipos primitivos" },
      { archivo: "03-constantes.js", titulo: "Constantes (const)" },
      { archivo: "04-tipado-dinamico.js", titulo: "Tipado dinámico" },
      { archivo: "05-comentarios.js", titulo: "Comentarios" },
      { archivo: "06-objetos.js", titulo: "Objetos" },
      { archivo: "07-arrays.js", titulo: "Arrays" },
      { archivo: "08-funciones.js", titulo: "Funciones" },
      { archivo: "09-argumentos.js", titulo: "Parámetros y argumentos" },
    ],
  },
  {
    carpeta: "02-operadores",
    titulo: "Operadores",
    nivel: "Básico",
    descripcion:
      "Cómo hacer cuentas, comparar valores y combinar condiciones. Aquí aparecen los valores «falsy», que explican muchos comportamientos sorprendentes de JavaScript.",
    lecciones: [
      { archivo: "01-aritmeticos.js", titulo: "Operadores aritméticos" },
      { archivo: "02-asignacion.js", titulo: "Operadores de asignación" },
      { archivo: "03-comparacion.js", titulo: "Operadores de comparación" },
      { archivo: "04-logicos.js", titulo: "Operadores lógicos" },
      { archivo: "05-falsy.js", titulo: "Valores falsy y truthy" },
      { archivo: "06-bitwise.js", titulo: "Operadores bit a bit" },
      { archivo: "07-orden.js", titulo: "Orden de los operadores" },
      { archivo: "08-ternario.js", titulo: "Operador ternario" },
    ],
  },
  {
    carpeta: "03-control-flujo",
    titulo: "Control de flujo",
    nivel: "Básico",
    descripcion:
      "Tomar decisiones con if y switch, y repetir tareas con bucles (while, for...of, for...in).",
    lecciones: [
      { archivo: "01-if-else.js", titulo: "if / else" },
      { archivo: "02-while.js", titulo: "Bucle while" },
      { archivo: "03-do while.js", titulo: "Bucle do...while" },
      { archivo: "04-for-of.js", titulo: "Bucle for...of" },
      { archivo: "05-for-in.js", titulo: "Bucle for...in" },
      { archivo: "06-break-continue.js", titulo: "break y continue" },
      { archivo: "07-switch.js", titulo: "switch" },
    ],
  },
  {
    carpeta: "04-ejercicios",
    titulo: "Práctica 1: lo básico",
    nivel: "Básico",
    ejercicios: true,
    descripcion:
      "Diez ejercicios para practicar variables, condiciones, bucles y funciones. Cada archivo trae su solución comentada.",
    lecciones: [
      { archivo: "01.js", titulo: "1 · El mayor de dos números" },
      { archivo: "02.js", titulo: "2 · Nombre de una resolución de pantalla" },
      { archivo: "03.js", titulo: "3 · Elemento de un array por índice" },
      { archivo: "04.js", titulo: "4 · Pares e impares del 0 al 10" },
      { archivo: "05.js", titulo: "5 · Menor y mayor de un array" },
      { archivo: "06.js", titulo: "6 · Contar números positivos" },
      { archivo: "07.js", titulo: "7 · Calculadora de impuestos" },
      { archivo: "08.js", titulo: "8 · De objeto a pares [clave, valor]" },
      { archivo: "09.js", titulo: "9 · De pares a objeto" },
      { archivo: "10.js", titulo: "10 · Array del 1 al n" },
    ],
  },
  {
    carpeta: "retos/01-basicos",
    titulo: "Retos 1: lo básico",
    nivel: "Básico",
    retos: true,
    descripcion: DESCRIPCION_RETOS,
    lecciones: [
      { archivo: "01-saludar.js", titulo: "1 · Saludar" },
      { archivo: "02-es-par.js", titulo: "2 · ¿Es par?" },
      { archivo: "03-temperatura.js", titulo: "3 · Convertir temperaturas" },
      { archivo: "04-etapa-de-vida.js", titulo: "4 · Etapa de la vida" },
      { archivo: "05-fizzbuzz.js", titulo: "5 · FizzBuzz" },
      { archivo: "06-sumar-hasta.js", titulo: "6 · Sumar hasta n" },
      { archivo: "07-contar-vocales.js", titulo: "7 · Contar vocales" },
    ],
  },
  {
    carpeta: "05-objetos",
    titulo: "Objetos",
    nivel: "Intermedio",
    descripcion:
      "Distintas formas de crear objetos, por qué se copian «por referencia», cómo clonarlos y los objetos que trae JavaScript: Math, Date y String.",
    lecciones: [
      { archivo: "01-intro.js", titulo: "Introducción a los objetos" },
      { archivo: "02-dinamico.js", titulo: "Objetos dinámicos" },
      { archivo: "03-faction.js", titulo: "Factory functions" },
      { archivo: "04-constructor.js", titulo: "Funciones constructoras" },
      { archivo: "05-atajos.js", titulo: "Atajos al crear objetos" },
      { archivo: "06-funciones.js", titulo: "Las funciones son objetos" },
      { archivo: "07-Funciones.js", titulo: "Más sobre funciones como objetos" },
      { archivo: "08-referencias.js", titulo: "Valores y referencias" },
      { archivo: "09-list-props.js", titulo: "Recorrer propiedades" },
      { archivo: "10-clones.js", titulo: "Clonar objetos" },
      { archivo: "11-private-public.js", titulo: "Propiedades privadas y públicas" },
      { archivo: "12-math.js", titulo: "El objeto Math" },
      { archivo: "13-date.js", titulo: "Fechas (Date)" },
      { archivo: "14-string.js", titulo: "Métodos de String" },
      { archivo: "15-escape.js", titulo: "Caracteres de escape" },
      { archivo: "16-templates.js", titulo: "Template literals" },
    ],
  },
  {
    carpeta: "06-ejercicios-2",
    titulo: "Práctica 2: objetos",
    nivel: "Intermedio",
    ejercicios: true,
    descripcion: "Siete ejercicios para crear, comparar, recorrer y copiar objetos.",
    lecciones: [
      { archivo: "01.js", titulo: "1 · Usuarios con función constructora" },
      { archivo: "02.js", titulo: "2 · Usuarios con factory function" },
      { archivo: "03.js", titulo: "3 · Comparar dos objetos" },
      { archivo: "04.js", titulo: "4 · Listar los métodos de un objeto" },
      { archivo: "05.js", titulo: "5 · Comprobar si existe una propiedad" },
      { archivo: "06.js", titulo: "6 · Crear copias de objetos" },
      { archivo: "07.js", titulo: "7 · Agregar un id a un objeto" },
    ],
  },
  {
    carpeta: "retos/02-objetos",
    titulo: "Retos 2: objetos y textos",
    nivel: "Intermedio",
    retos: true,
    descripcion: DESCRIPCION_RETOS,
    lecciones: [
      { archivo: "01-crear-producto.js", titulo: "1 · Crear un producto" },
      { archivo: "02-describir-persona.js", titulo: "2 · Describir a una persona" },
      { archivo: "03-contar-propiedades.js", titulo: "3 · Contar propiedades" },
      { archivo: "04-fusionar-objetos.js", titulo: "4 · Fusionar objetos" },
      { archivo: "05-capitalizar.js", titulo: "5 · Capitalizar" },
      { archivo: "06-iniciales.js", titulo: "6 · Iniciales" },
    ],
  },
  {
    carpeta: "07-arrays",
    titulo: "Arrays",
    nivel: "Intermedio",
    descripcion:
      "Agregar, quitar, buscar y ordenar elementos, y los métodos que más usarás en el día a día: filter, map y reduce.",
    lecciones: [
      { archivo: "01-agregar.js", titulo: "Agregar elementos" },
      { archivo: "02-eliminar.js", titulo: "Eliminar elementos" },
      { archivo: "03-buscar.js", titulo: "Buscar elementos" },
      { archivo: "04-fat-arrow-functions.js", titulo: "Funciones flecha (=>)" },
      { archivo: "05-buscar-referencias.js", titulo: "Buscar objetos en un array" },
      { archivo: "06-vaciando-arrays.js", titulo: "Vaciar arrays" },
      { archivo: "07-Combinando-dividiendo.js", titulo: "Combinar y dividir arrays" },
      { archivo: "08-spread-operator.js", titulo: "Spread operator (...)" },
      { archivo: "09-join.js", titulo: "join" },
      { archivo: "10-ordenando-arrays.js", titulo: "Ordenar arrays (sort)" },
      { archivo: "11-every-some.js", titulo: "every y some" },
      { archivo: "12-filter.js", titulo: "filter" },
      { archivo: "13-maps.js", titulo: "map" },
      { archivo: "14-reduce.js", titulo: "reduce" },
    ],
  },
  {
    carpeta: "08-ejercicios-3",
    titulo: "Práctica 3: arrays",
    nivel: "Intermedio",
    ejercicios: true,
    descripcion: "Nueve ejercicios con map, filter, reduce y sort sobre listas de usuarios.",
    lecciones: [
      { archivo: "01.js", titulo: "1 · Valores absolutos con map" },
      { archivo: "02.js", titulo: "2 · Separar por tipo con filter" },
      { archivo: "03.js", titulo: "3 · Usuarios de pago" },
      { archivo: "04.js", titulo: "4 · Contar con reduce" },
      { archivo: "05.js", titulo: "5 · El usuario de mayor edad" },
      { archivo: "06.js", titulo: "6 · Separar por tipo con reduce" },
      { archivo: "07.js", titulo: "7 · Agrupar por propiedad (groupBy)" },
      { archivo: "08.js", titulo: "8 · Lista HTML de usuarios de pago" },
      { archivo: "09.js", titulo: "9 · Combinar, ordenar y mostrar usuarios" },
    ],
  },
  {
    carpeta: "retos/03-arrays",
    titulo: "Retos 3: arrays",
    nivel: "Intermedio",
    retos: true,
    descripcion: DESCRIPCION_RETOS,
    lecciones: [
      { archivo: "01-dobles.js", titulo: "1 · Dobles" },
      { archivo: "02-mayores-de-edad.js", titulo: "2 · Mayores de edad" },
      { archivo: "03-total-carrito.js", titulo: "3 · Total del carrito" },
      { archivo: "04-sin-repetidos.js", titulo: "4 · Sin repetidos" },
      { archivo: "05-ordenar-por-precio.js", titulo: "5 · Ordenar por precio" },
      { archivo: "06-palabra-mas-larga.js", titulo: "6 · La palabra más larga" },
      { archivo: "07-contar-por-categoria.js", titulo: "7 · Contar por categoría" },
    ],
  },
  {
    carpeta: "09-funcioes",
    titulo: "Funciones a fondo",
    nivel: "Intermedio",
    descripcion:
      "Las distintas formas de escribir funciones, el alcance (scope) de las variables, los errores con try/catch y la palabra clave this.",
    lecciones: [
      { archivo: "01-declaracion-expresion.js", titulo: "Declaración vs expresión" },
      { archivo: "02-let-var-const-fn.js", titulo: "let, var, const y funciones" },
      { archivo: "03-alcance.js", titulo: "Alcance (scope)" },
      { archivo: "04-arguments.js", titulo: "El objeto arguments" },
      { archivo: "05-fat-arrow.js", titulo: "Funciones flecha" },
      { archivo: "06-rest.js", titulo: "Parámetro rest (...)" },
      { archivo: "07-parametros.js", titulo: "Parámetros por defecto" },
      { archivo: "08-param-destructuring.js", titulo: "Desestructurar parámetros" },
      { archivo: "09-getters-setters.js", titulo: "Getters y setters" },
      { archivo: "10-Try-Catch.js", titulo: "try / catch" },
      { archivo: "11-this.js", titulo: "Qué es this" },
      { archivo: "12-contexto-de-this.js", titulo: "El contexto de this" },
      { archivo: "13-pasando-this.js", titulo: "Pasar this (call, apply, bind)" },
    ],
  },
  {
    carpeta: "10-ejercicios-04",
    titulo: "Práctica 4: funciones",
    nivel: "Intermedio",
    ejercicios: true,
    descripcion: "Cinco ejercicios con this, parámetros rest y callbacks (funciones que reciben otras funciones).",
    lecciones: [
      { archivo: "01.js", titulo: "1 · Extender un objeto con call" },
      { archivo: "02.js", titulo: "2 · Extender un objeto con métodos" },
      { archivo: "03.js", titulo: "3 · Callbacks con parámetro rest" },
      { archivo: "04.js", titulo: "4 · Sumar con un callback" },
      { archivo: "05.js", titulo: "5 · Ordenar letras con un callback" },
    ],
  },
  {
    carpeta: "retos/04-funciones",
    titulo: "Retos 4: funciones",
    nivel: "Intermedio",
    retos: true,
    descripcion: DESCRIPCION_RETOS,
    lecciones: [
      { archivo: "01-aplicar-dos-veces.js", titulo: "1 · Aplicar dos veces" },
      { archivo: "02-sumar-todos.js", titulo: "2 · Sumar todos" },
      { archivo: "03-crear-saludo.js", titulo: "3 · Saludo en varios idiomas" },
      { archivo: "04-crear-contador.js", titulo: "4 · Contador (closures)" },
      { archivo: "05-dividir-seguro.js", titulo: "5 · Dividir sin romper nada" },
      { archivo: "06-componer.js", titulo: "6 · Componer funciones" },
    ],
  },
  {
    carpeta: "11-prototipos",
    titulo: "Prototipos",
    nivel: "Avanzado",
    descripcion:
      "Cómo comparten métodos los objetos de JavaScript por dentro. Es la base para entender la herencia y las clases.",
    lecciones: [
      { archivo: "01-principios.js", titulo: "Principios de los prototipos" },
      { archivo: "02-proto.js", titulo: "__proto__ y la cadena de prototipos" },
      { archivo: "03-iterando.js", titulo: "Recorrer propiedades heredadas" },
      { archivo: "04-extendiendo.js", titulo: "Extender prototipos" },
    ],
  },
  {
    carpeta: "12-herencia",
    titulo: "Herencia",
    nivel: "Avanzado",
    descripcion:
      "Reutilizar código entre objetos: herencia con prototipos, sobrescribir métodos, polimorfismo y la alternativa de la composición.",
    lecciones: [
      { archivo: "01-herencia.js", titulo: "Herencia" },
      { archivo: "02-con-padre.js", titulo: "Llamar al constructor padre" },
      { archivo: "03-method-override.js", titulo: "Sobrescribir métodos" },
      { archivo: "04-polimorfismo.js", titulo: "Polimorfismo" },
      { archivo: "05-comp-vs-her.js", titulo: "Composición vs herencia" },
      { archivo: "06-mixins.js", titulo: "Mixins" },
    ],
  },
  {
    carpeta: "13-clases",
    titulo: "Clases",
    nivel: "Avanzado",
    descripcion:
      "La sintaxis moderna (ES6) para lo que viste en prototipos y herencia: class, extends, propiedades privadas con # y miembros static.",
    lecciones: [
      { archivo: "01-clases.js", titulo: "Clases" },
      { archivo: "02-privado.js", titulo: "Propiedades privadas (#)" },
      { archivo: "03-static.js", titulo: "Miembros static" },
      { archivo: "04-get-set.js", titulo: "get y set" },
      { archivo: "05-herecia.js", titulo: "Herencia con extends" },
      { archivo: "06-method-override.js", titulo: "Sobrescribir métodos" },
      { archivo: "07-mixins.js", titulo: "Mixins con clases" },
    ],
  },
  {
    carpeta: "retos/05-clases",
    titulo: "Retos 5: clases",
    nivel: "Avanzado",
    retos: true,
    descripcion: DESCRIPCION_RETOS,
    lecciones: [
      { archivo: "01-rectangulo.js", titulo: "1 · Rectángulo" },
      { archivo: "02-cuenta-bancaria.js", titulo: "2 · Cuenta bancaria" },
      { archivo: "03-animales.js", titulo: "3 · Animales (herencia)" },
      { archivo: "04-contar-usuarios.js", titulo: "4 · Contar usuarios (static)" },
      { archivo: "05-inventario.js", titulo: "5 · Inventario de una tienda" },
    ],
  },
  {
    carpeta: "14-dom",
    titulo: "El DOM: JavaScript en la página",
    nivel: "Avanzado",
    dom: true,
    descripcion:
      "Usar JavaScript para leer y cambiar la página web: seleccionar elementos, crearlos, reaccionar a eventos y trabajar con formularios. El resultado aparece en el panel «Página».",
    lecciones: [
      { archivo: "01-selectores.js", titulo: "Selectores", pagina: PAGINA_SELECTORES },
      { archivo: "02-list-collection.js", titulo: "HTMLCollection vs NodeList", pagina: PAGINA_SELECTORES },
      { archivo: "03-elementos.js", titulo: "Crear y modificar elementos" },
      { archivo: "04-dom.js", titulo: "Insertar, mover y quitar elementos" },
      { archivo: "05-eventos.js", titulo: "Eventos" },
      {
        archivo: "06-drag.js",
        titulo: "Arrastrar y soltar (drag & drop)",
        pagina: {
          css: `.drop { float: left; background-color: teal; width: 150px; height: 50px;
                text-align: center; padding-top: 30px; margin-right: 3%; }`,
        },
      },
      { archivo: "07-formularios.js", titulo: "Formularios" },
    ],
  },
  {
    carpeta: "retos/06-dom",
    titulo: "Retos 6: el DOM",
    nivel: "Avanzado",
    retos: true,
    dom: true,
    descripcion: DESCRIPCION_RETOS,
    lecciones: [
      { archivo: "01-crear-boton.js", titulo: "1 · Crear un botón" },
      { archivo: "02-crear-lista.js", titulo: "2 · Crear una lista" },
      { archivo: "03-contador-de-clics.js", titulo: "3 · Contador de clics" },
      { archivo: "04-filtrar-lista.js", titulo: "4 · Buscador" },
    ],
  },
  {
    carpeta: "15-promesas",
    titulo: "Promesas y código asíncrono",
    nivel: "Avanzado",
    descripcion:
      "Cómo trabajar con tareas que tardan (como pedir datos a internet) sin bloquear la página: promesas, async/await y fetch.",
    lecciones: [
      { archivo: "01-promesas.js", titulo: "Promesas" },
      { archivo: "02-chain.js", titulo: "Encadenar promesas (then)" },
      { archivo: "03-catch-finally.js", titulo: "catch y finally" },
      { archivo: "04-static.js", titulo: "Métodos estáticos de Promise" },
      { archivo: "05-paralelo.js", titulo: "Promesas en paralelo" },
      { archivo: "06-args.js", titulo: "Pasar argumentos a promesas" },
      { archivo: "07-async.js", titulo: "async / await" },
      { archivo: "08-fetch.js", titulo: "fetch: pedir datos a una API", red: true },
      { archivo: "09-opciones.js", titulo: "Opciones de fetch (POST)", red: true },
      { archivo: "10-cancel.js", titulo: "Cancelar peticiones (AbortController)", red: true },
    ],
  },
  {
    carpeta: "retos/07-asincronia",
    titulo: "Retos 7: promesas y fetch",
    nivel: "Avanzado",
    retos: true,
    descripcion: DESCRIPCION_RETOS,
    lecciones: [
      { archivo: "01-esperar.js", titulo: "1 · Esperar" },
      { archivo: "02-obtener-usuario.js", titulo: "2 · Pedir un usuario a una API", red: true },
      { archivo: "03-obtener-varios.js", titulo: "3 · Varias peticiones a la vez", red: true },
      { archivo: "04-tiempo-limite.js", titulo: "4 · Tiempo límite" },
    ],
  },
  {
    carpeta: "16-proyecto",
    titulo: "Proyecto final",
    nivel: "Avanzado",
    dom: true,
    descripcion:
      "Todo junto: una clase User que descarga usuarios de una API, los muestra en una lista y permite añadir nuevos con un formulario validado.",
    lecciones: [{ archivo: "index.js", titulo: "Lista de usuarios con formulario", red: true }],
  },
];
