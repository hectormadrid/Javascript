# Curso de JavaScript desde cero

Apuntes y ejercicios para aprender JavaScript paso a paso: desde qué es una variable hasta un pequeño proyecto que pide datos a una API. Son 16 módulos de lecciones y 7 bloques de **retos** para practicar. Cada lección es un archivo `.js` con explicaciones en los comentarios.

No hace falta saber programar. Solo necesitas un navegador y, si quieres, un editor de código.

---

## 1. Empezar en 1 minuto

1. Descarga o clona esta carpeta en tu ordenador.
2. Haz doble clic en **`lecciones.html`** para abrirlo en el navegador (Chrome, Edge o Firefox).
3. Pulsa **«Empezar por la primera lección»**.

El visor te muestra cada lección y la ejecuta. Lo que el código imprime con `console.log(...)` aparece en el panel **Consola**.

> Al abrir el archivo con doble clic, el navegador no deja que el visor lea el código, así que el panel «Código» te pedirá que abras el archivo en tu editor. La consola funciona igual. Para tenerlo todo en la misma pantalla, sigue el paso 2.

## 2. Preparar tu entorno (recomendado)

1. Instala **[Visual Studio Code](https://code.visualstudio.com/)**: es gratis y es el editor que usa casi todo el mundo.
2. En VS Code, ve a la pestaña de extensiones (`Ctrl+Shift+X`), busca **Live Server** e instálala.
3. Abre esta carpeta con **Archivo → Abrir carpeta…**
4. Haz clic derecho en `lecciones.html` y elige **«Open with Live Server»**.

Ahora el visor muestra el código con colores y números de línea. Si cambias un archivo y lo guardas, pulsa **«Ejecutar de nuevo»** para ver el resultado.

**Opcional: Node.js.** Si instalas [Node.js](https://nodejs.org/) (versión LTS), puedes ejecutar las lecciones desde la terminal de VS Code (`Ctrl+ñ`):

```bash
node 01-tipos/01-varables.js
```

Funciona con todas las lecciones salvo las de los módulos 14 y 16, que usan la página web (`document`) y solo funcionan en el navegador.

## 3. Ruta de aprendizaje

Sigue los módulos en orden: cada uno usa lo que aprendiste en los anteriores. Los módulos de **práctica** son ejercicios resueltos. Los de **retos** están sin resolver: te toca a ti (ver el apartado 5).

| # | Módulo | Nivel | Qué aprenderás |
|---|---|---|---|
| 1 | [01-tipos](01-tipos) | Básico | Variables (`let`, `const`), tipos de datos, objetos, arrays y funciones |
| 2 | [02-operadores](02-operadores) | Básico | Operaciones, comparaciones, `&&` `\|\|` `!`, valores *falsy* y el operador ternario |
| 3 | [03-control-flujo](03-control-flujo) | Básico | `if`/`else`, `switch` y bucles (`while`, `for...of`, `for...in`) |
| 4 | [04-ejercicios](04-ejercicios) | Práctica | 10 ejercicios resueltos con lo básico |
| 5 | [retos/01-basicos](retos/01-basicos) | 🎯 Retos | 7 retos: saludar, pares, FizzBuzz, contar vocales… |
| 6 | [05-objetos](05-objetos) | Intermedio | Crear objetos, referencias, clonar, `Math`, `Date`, `String` y *template literals* |
| 7 | [06-ejercicios-2](06-ejercicios-2) | Práctica | 7 ejercicios resueltos con objetos |
| 8 | [retos/02-objetos](retos/02-objetos) | 🎯 Retos | 6 retos con objetos y textos |
| 9 | [07-arrays](07-arrays) | Intermedio | Agregar, quitar, buscar y ordenar; funciones flecha; `filter`, `map` y `reduce` |
| 10 | [08-ejercicios-3](08-ejercicios-3) | Práctica | 9 ejercicios resueltos con arrays |
| 11 | [retos/03-arrays](retos/03-arrays) | 🎯 Retos | 7 retos con `map`, `filter`, `reduce` y `sort` |
| 12 | [09-funcioes](09-funcioes) | Intermedio | Alcance (*scope*), parámetros, getters/setters, `try`/`catch` y `this` |
| 13 | [10-ejercicios-04](10-ejercicios-04) | Práctica | 5 ejercicios resueltos con funciones y *callbacks* |
| 14 | [retos/04-funciones](retos/04-funciones) | 🎯 Retos | 6 retos: rest, valores por defecto, *closures*, `try`/`catch`… |
| 15 | [11-prototipos](11-prototipos) | Avanzado | Cómo comparten métodos los objetos por dentro |
| 16 | [12-herencia](12-herencia) | Avanzado | Herencia, polimorfismo, composición y *mixins* |
| 17 | [13-clases](13-clases) | Avanzado | `class`, `extends`, propiedades privadas `#` y `static` |
| 18 | [retos/05-clases](retos/05-clases) | 🎯 Retos | 5 retos: una cuenta bancaria, un inventario… |
| 19 | [14-dom](14-dom) | Avanzado | Cambiar la página con JavaScript: elementos, eventos y formularios |
| 20 | [retos/06-dom](retos/06-dom) | 🎯 Retos | 4 retos: botones, listas, un contador de clics y un buscador |
| 21 | [15-promesas](15-promesas) | Avanzado | Código asíncrono: promesas, `async`/`await` y `fetch` |
| 22 | [retos/07-asincronia](retos/07-asincronia) | 🎯 Retos | 4 retos con promesas y peticiones a una API |
| 23 | [16-proyecto](16-proyecto) | Proyecto | Una lista de usuarios con formulario que usa una API real |

**¿Cuánto tiempo?** Depende de ti. Una lección al día de los módulos 1 a 3 es un buen ritmo para empezar. Es mejor poco y a menudo que mucho de golpe.

## 4. Cómo estudiar cada lección

1. **Lee el código de arriba abajo.** Las líneas que empiezan por `//` o están entre `/*` y `*/` son comentarios: el ordenador las ignora y sirven para explicar.
2. **Antes de mirar la consola, adivina** qué va a imprimir. Luego compruébalo.
3. **Cambia algo y vuelve a ejecutar**: otro número, otro texto, quita una línea… Si algo se rompe, mejor: lee el error.
4. **Escribe tú el código** de los ejercicios en un archivo nuevo antes de leer la solución.

### Leer los errores sin miedo

Cuando algo falla, la consola muestra un mensaje en rojo y, si lo reconoce, una 💡 pista en español. Los más habituales:

| Mensaje | Qué suele significar |
|---|---|
| `x is not defined` | Usas una variable que no existe. ¿Está bien escrita? ¿La declaraste antes? |
| `Cannot read properties of undefined` | Intentas usar `algo.propiedad`, pero `algo` vale `undefined` |
| `x is not a function` | Pones `()` detrás de algo que no es una función |
| `Assignment to constant variable` | Intentas cambiar una `const`. Usa `let` si tiene que cambiar |
| `Unexpected token` | Falta o sobra un paréntesis, una llave, una coma o una comilla |

### La consola del navegador

Además del visor, todos los navegadores tienen su propia consola: pulsa **F12** y abre la pestaña **Console**. Ahí puedes escribir JavaScript directamente (prueba con `2 + 2` o `"hola".toUpperCase()`) y ver errores con más detalle.

## 5. Los retos

Cada reto es un archivo con un enunciado, ejemplos, una pista, qué lección repasar y una función vacía:

```js
function esPar(numero) {
  // Escribe tu código aquí
}
```

1. Abre el archivo en tu editor y escribe tu solución donde dice «Escribe tu código aquí».
2. Guarda y pulsa **«Ejecutar de nuevo»** en el visor.
3. Las pruebas del final del archivo te dicen qué funciona (✅) y qué no (❌, con lo que esperaban y lo que obtuvieron).
4. Cuando pasan todas, verás «🎉 ¡Reto superado!» y el reto se marca como hecho.

¿Atascado? Vuelve a leer la pista y la lección que indica. Si aun así no sale, el botón **«Ver solución»** muestra una solución comentada. También están en [retos/soluciones](retos/soluciones). Hay muchas formas correctas de resolver cada reto: si tus pruebas pasan, tu solución vale.

Para comprobar un reto desde la terminal (salvo los del DOM):

```bash
node -r ./retos/probar.js retos/01-basicos/02-es-par.js
```

## 6. Estructura del proyecto

```
├── lecciones.html      ← abre esto para seguir el curso
├── visor/              ← el visor de lecciones (no hace falta tocarlo)
│   ├── curso.js        ← índice de módulos y lecciones
│   ├── visor.js
│   └── visor.css
├── 01-tipos/ … 16-proyecto/   ← las lecciones, una carpeta por módulo
├── retos/              ← ejercicios para resolver tú
│   ├── 01-basicos/ … 07-asincronia/
│   ├── soluciones/     ← una solución comentada para cada reto
│   └── probar.js       ← comprueba los retos (no hace falta tocarlo)
├── index.html          ← página vacía para probar cualquier archivo a mano
├── form.html           ← página para 14-dom/07-formularios.js
└── dragndrop.html      ← página para 14-dom/06-drag.js
```

**Probar un archivo a mano:** en `index.html`, cambia la ruta de `<script src="...">` por la del archivo que quieras, abre la página y pulsa F12 para ver la consola.

**Añadir tus propias lecciones:** crea el archivo `.js` en la carpeta del módulo y añádelo a la lista de ese módulo en `visor/curso.js`. Así aparecerá en el visor.

## 7. Pequeño glosario

- **Variable**: una caja con nombre donde guardas un valor (`let edad = 20`).
- **Función**: un bloque de código con nombre que puedes reutilizar (`function saludar() { … }`).
- **Objeto**: un conjunto de datos con nombre, como `{ nombre: "Ana", edad: 20 }`.
- **Array**: una lista ordenada de valores (`[1, 2, 3]`).
- **Método**: una función que pertenece a un objeto (`"hola".toUpperCase()`).
- **DOM**: la representación de la página web que JavaScript puede leer y cambiar.
- **API**: un servicio en internet al que le pides datos. Este curso usa [JSONPlaceholder](https://jsonplaceholder.typicode.com/), una API de pruebas gratuita.
- **Asíncrono**: código que tarda (por ejemplo, esperar datos de internet) y termina más tarde, sin bloquear el resto.

## 8. Para seguir aprendiendo

- [MDN Web Docs en español](https://developer.mozilla.org/es/docs/Web/JavaScript): la referencia de JavaScript que usan los profesionales.
- [javascript.info en español](https://es.javascript.info/): un tutorial muy completo, de cero a avanzado.
- Cuando termines, prueba a ampliar el proyecto final: borrar usuarios, buscarlos por nombre o guardar la lista en `localStorage`.
