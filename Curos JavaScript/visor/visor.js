// Visor de lecciones: muestra el código de cada archivo del curso, lo ejecuta
// dentro de un iframe y copia lo que imprime console.log en el panel «Consola».
// No hace falta tocar este archivo para seguir el curso.

const lecciones = CURSO.flatMap((modulo, m) =>
  modulo.lecciones.map((leccion, i) => ({
    ...leccion,
    modulo,
    numeroModulo: m + 1,
    numeroEnModulo: i + 1,
    ruta: `${modulo.carpeta}/${leccion.archivo}`,
  }))
);

const $ = (selector) => document.querySelector(selector);
const escapar = (texto) =>
  String(texto).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

// ---------- Progreso (se guarda solo en este navegador) ----------

const CLAVE_PROGRESO = "curso-js-vistas";
let vistas = new Set();
try {
  vistas = new Set(JSON.parse(localStorage.getItem(CLAVE_PROGRESO)) || []);
} catch (e) {}

function guardarProgreso() {
  try {
    localStorage.setItem(CLAVE_PROGRESO, JSON.stringify([...vistas]));
  } catch (e) {}
  pintarProgreso();
  pintarIndice();
}

function pintarProgreso() {
  const total = lecciones.length;
  const hechas = lecciones.filter((l) => vistas.has(l.ruta)).length;
  $("#progreso-relleno").style.width = `${(hechas / total) * 100}%`;
  $("#progreso-texto").textContent = `${hechas} / ${total}`;
}

// ---------- Índice lateral ----------

function pintarIndice() {
  const actual = leccionActual();
  $("#indice").innerHTML = CURSO.map((modulo, m) => {
    const delModulo = lecciones.filter((l) => l.modulo === modulo);
    const hechas = delModulo.filter((l) => vistas.has(l.ruta)).length;
    const abierto = actual ? actual.modulo === modulo : m === 0;
    const items = delModulo
      .map(
        (l) => `
        <li>
          <a href="#${encodeURI(l.ruta)}" class="indice__leccion${l === actual ? " es-actual" : ""}"
             ${l === actual ? 'aria-current="page"' : ""}>
            <span class="indice__marca${vistas.has(l.ruta) ? " es-vista" : ""}" aria-hidden="true"></span>
            ${escapar(l.titulo)}
          </a>
        </li>`
      )
      .join("");
    return `
      <details class="indice__modulo" ${abierto ? "open" : ""}>
        <summary>
          <span class="indice__numero">${m + 1}</span>
          <span class="indice__titulo">${escapar(modulo.titulo)}</span>
          <span class="indice__cuenta">${hechas}/${delModulo.length}</span>
        </summary>
        <ul>${items}</ul>
      </details>`;
  }).join("");
}

// ---------- Navegación ----------

function leccionActual() {
  const ruta = decodeURI(location.hash.slice(1));
  return lecciones.find((l) => l.ruta === ruta);
}

function irA(leccion) {
  location.hash = leccion ? encodeURI(leccion.ruta) : "";
}

function primeraPendiente() {
  return lecciones.find((l) => !vistas.has(l.ruta)) || lecciones[0];
}

function mostrar() {
  const leccion = leccionActual();
  pintarIndice();
  cerrarMenu();
  if (leccion) mostrarLeccion(leccion);
  else mostrarBienvenida();
  window.scrollTo(0, 0);
}

// ---------- Pantalla de bienvenida ----------

function mostrarBienvenida() {
  document.title = "Curso de JavaScript";
  const niveles = ["Básico", "Intermedio", "Avanzado"];
  const empezado = vistas.size > 0;
  const tarjetas = niveles
    .map((nivel) => {
      const modulos = CURSO.filter((m) => m.nivel === nivel)
        .map((modulo) => {
          const primera = lecciones.find((l) => l.modulo === modulo);
          return `
            <a class="tarjeta" href="#${encodeURI(primera.ruta)}">
              <span class="tarjeta__numero">${primera.numeroModulo}</span>
              <span class="tarjeta__titulo">${escapar(modulo.titulo)}</span>
              <span class="tarjeta__texto">${escapar(modulo.descripcion)}</span>
              <span class="tarjeta__pie">${modulo.lecciones.length} ${modulo.retos ? "retos para resolver" : modulo.ejercicios ? "ejercicios resueltos" : "lecciones"}</span>
            </a>`;
        })
        .join("");
      return `
        <h2 class="nivel"><span class="etiqueta etiqueta--${nivel.toLowerCase()}">${nivel}</span></h2>
        <div class="tarjetas">${modulos}</div>`;
    })
    .join("");

  $("#contenido").innerHTML = `
    <section class="bienvenida">
      <h1>Aprende JavaScript desde cero</h1>
      <p class="entradilla">
        ${CURSO.length} módulos y ${lecciones.length} archivos de ejemplo, ordenados de lo más básico a un proyecto final.
        Cada lección es un archivo <code>.js</code> con explicaciones en los comentarios. Aquí puedes leerlo,
        ejecutarlo y ver el resultado sin instalar nada.
      </p>
      <div class="acciones">
        <a class="boton boton--principal" href="#${encodeURI(primeraPendiente().ruta)}">
          ${empezado ? "Continuar donde lo dejaste →" : "Empezar por la primera lección →"}
        </a>
      </div>

      <h2>Cómo usar este visor</h2>
      <ol class="pasos">
        <li><strong>Lee el código</strong> de la lección. Las líneas que empiezan por <code>//</code> o están entre <code>/* */</code> son comentarios: explican lo que pasa.</li>
        <li><strong>Mira la consola</strong>: ahí aparece todo lo que el código imprime con <code>console.log(...)</code>.</li>
        <li><strong>Experimenta</strong>: abre el mismo archivo en tu editor, cambia un valor, guarda y pulsa «Ejecutar de nuevo». Romper cosas es la mejor forma de aprender.</li>
        <li><strong>Resuelve los retos</strong>: los módulos «Retos» traen ejercicios sin resolver. Escribe tu solución y las pruebas te dirán si funciona. Si te atascas, tienes el botón «Ver solución».</li>
        <li><strong>Avanza</strong> con «Siguiente», que marca la lección como vista. Tu progreso se guarda en este navegador.</li>
      </ol>
      ${
        location.protocol === "file:"
          ? `<p class="aviso">Has abierto el archivo directamente, así que el visor no puede mostrar el código (la consola sí funciona).
             Para verlo todo, abre la carpeta en VS Code y usa la extensión <strong>Live Server</strong>; el README lo explica paso a paso.</p>`
          : ""
      }

      ${tarjetas}

      ${empezado ? `<p class="reiniciar"><button class="boton boton--discreto" id="reiniciar">Reiniciar mi progreso</button></p>` : ""}
    </section>`;

  const reiniciar = $("#reiniciar");
  if (reiniciar)
    reiniciar.onclick = () => {
      if (confirm("¿Seguro que quieres borrar tu progreso?")) {
        vistas.clear();
        guardarProgreso();
        mostrarBienvenida();
      }
    };
}

// ---------- Pantalla de una lección ----------

function mostrarLeccion(leccion) {
  document.title = `${leccion.titulo} · Curso de JavaScript`;
  const indice = lecciones.indexOf(leccion);
  const anterior = lecciones[indice - 1];
  const siguiente = lecciones[indice + 1];
  const { modulo } = leccion;
  const usaPagina = modulo.dom || leccion.pagina;

  const etiquetas = [
    `<span class="etiqueta etiqueta--${modulo.nivel.toLowerCase()}">${modulo.nivel}</span>`,
    modulo.ejercicios ? `<span class="etiqueta">Ejercicio resuelto</span>` : "",
    modulo.retos ? `<span class="etiqueta etiqueta--reto">Reto: te toca a ti</span>` : "",
    usaPagina ? `<span class="etiqueta">Usa la página</span>` : "",
    leccion.red ? `<span class="etiqueta">Necesita internet</span>` : "",
  ].join("");

  const comoEjecutar = usaPagina
    ? `Esta lección usa <code>document</code>, que solo existe en el navegador.`
    : modulo.retos
    ? `También puedes comprobarlo en la terminal con <code>node -r ./retos/probar.js "${escapar(leccion.ruta)}"</code>.`
    : `También puedes ejecutarla en la terminal con <code>node "${escapar(leccion.ruta)}"</code>.`;
  const consejo = modulo.retos
    ? `<strong>Para resolverlo:</strong> abre <code>${escapar(leccion.ruta)}</code> en tu editor, escribe tu código
       donde dice «Escribe tu código aquí», guarda y pulsa «Ejecutar de nuevo». Al pasar todas las pruebas,
       el reto se marca como hecho. ${comoEjecutar}`
    : `<strong>Para experimentar:</strong> abre <code>${escapar(leccion.ruta)}</code> en tu editor, cambia algo,
       guarda y pulsa «Ejecutar de nuevo». ${comoEjecutar}`;

  $("#contenido").innerHTML = `
    <article class="leccion">
      <p class="migas">Módulo ${leccion.numeroModulo} · ${escapar(modulo.titulo)} · ${leccion.numeroEnModulo} de ${modulo.lecciones.length}</p>
      <h1>${escapar(leccion.titulo)}</h1>
      <div class="etiquetas">${etiquetas}</div>
      <p class="descripcion">${escapar(modulo.descripcion)}</p>

      <div class="acciones">
        <button class="boton boton--principal" id="ejecutar">▶ Ejecutar de nuevo</button>
        <button class="boton" id="marcar" aria-pressed="${vistas.has(leccion.ruta)}"></button>
        ${modulo.retos ? `<button class="boton" id="solucion">Ver solución</button>` : ""}
        <span class="acciones__espacio"></span>
        <button class="boton" id="anterior" ${anterior ? "" : "disabled"}>← Anterior</button>
        <button class="boton" id="siguiente">${siguiente ? "Siguiente →" : "Terminar ✓"}</button>
      </div>

      <div class="paneles">
        <section class="panel panel--codigo">
          <header class="panel__cabecera">
            <span>Código</span>
            <code class="panel__ruta">${escapar(leccion.ruta)}</code>
          </header>
          <div id="codigo" class="codigo"><p class="codigo__cargando">Cargando el código…</p></div>
        </section>

        <div class="columna">
          <section class="panel panel--pagina" ${usaPagina ? "" : "hidden"}>
            <header class="panel__cabecera"><span>Página</span><span class="panel__nota">lo que el código dibuja</span></header>
            <iframe id="pagina" title="Resultado de la lección"></iframe>
          </section>
          <section class="panel panel--consola">
            <header class="panel__cabecera">
              <span>Consola</span>
              <button class="boton boton--discreto boton--mini" id="limpiar">Limpiar</button>
            </header>
            <div id="consola" class="consola" role="log" aria-live="polite"></div>
          </section>
        </div>
      </div>

      <p class="consejo">${consejo}</p>
    </article>`;

  const marcar = $("#marcar");
  pintarMarcar = () => {
    const vista = vistas.has(leccion.ruta);
    marcar.textContent = vista ? "✓ Vista" : "Marcar como vista";
    marcar.setAttribute("aria-pressed", vista);
    marcar.classList.toggle("es-vista", vista);
  };
  pintarMarcar();
  marcar.onclick = () => {
    vistas.has(leccion.ruta) ? vistas.delete(leccion.ruta) : vistas.add(leccion.ruta);
    guardarProgreso();
    pintarMarcar();
  };

  $("#ejecutar").onclick = () => ejecutar(leccion);
  $("#limpiar").onclick = () => ($("#consola").innerHTML = "");
  $("#anterior").onclick = () => irA(anterior);
  $("#siguiente").onclick = () => {
    vistas.add(leccion.ruta);
    guardarProgreso();
    irA(siguiente);
  };

  const botonSolucion = $("#solucion");
  if (botonSolucion) {
    let viendoSolucion = false;
    botonSolucion.onclick = () => {
      if (!viendoSolucion && !confirm("¿Seguro que quieres ver la solución? Intentarlo un rato más es la mejor forma de aprender.")) return;
      viendoSolucion = !viendoSolucion;
      const ruta = viendoSolucion ? solucionDe(leccion) : leccion.ruta;
      botonSolucion.textContent = viendoSolucion ? "Volver al reto" : "Ver solución";
      $(".panel--codigo .panel__cabecera span").textContent = viendoSolucion ? "Solución" : "Código";
      $(".panel__ruta").textContent = ruta;
      cargarCodigo(leccion, ruta);
    };
  }

  cargarCodigo(leccion);
  ejecutar(leccion);
}

let pintarMarcar = () => {};
const solucionDe = (leccion) => `${leccion.modulo.carpeta.replace(/^retos\//, "retos/soluciones/")}/${leccion.archivo}`;

// ---------- Mostrar el código con colores ----------

const PALABRAS_CLAVE =
  "let|const|var|function|return|if|else|for|while|do|switch|case|default|break|continue|new|class|extends|static|get|set|this|super|try|catch|finally|throw|async|await|of|in|typeof|instanceof|delete|null|undefined|true|false";
const TOKENS = new RegExp(
  [
    "(\\/\\/[^\\n]*|\\/\\*[\\s\\S]*?\\*\\/)", // comentarios
    "(`(?:\\\\[\\s\\S]|[^`\\\\])*`|\"(?:\\\\.|[^\"\\\\\\n])*\"|'(?:\\\\.|[^'\\\\\\n])*')", // textos
    `\\b(${PALABRAS_CLAVE})\\b`, // palabras clave
    "\\b(\\d+(?:\\.\\d+)?)\\b", // números
  ].join("|"),
  "g"
);

function colorear(codigo) {
  let html = "";
  let ultimo = 0;
  for (const t of codigo.matchAll(TOKENS)) {
    html += escapar(codigo.slice(ultimo, t.index));
    const clase = t[1] ? "com" : t[2] ? "txt" : t[3] ? "pal" : "num";
    // Un comentario o texto puede ocupar varias líneas: se colorea cada línea por separado
    // para que luego se puedan numerar sin romper las etiquetas <span>.
    html += escapar(t[0])
      .split("\n")
      .map((trozo) => `<span class="tk-${clase}">${trozo}</span>`)
      .join("\n");
    ultimo = t.index + t[0].length;
  }
  return html + escapar(codigo.slice(ultimo));
}

async function cargarCodigo(leccion, ruta = leccion.ruta) {
  const contenedor = $("#codigo");
  try {
    const respuesta = await fetch(`${rutaURL(ruta)}?v=${Date.now()}`);
    if (!respuesta.ok) throw new Error(respuesta.status);
    const codigo = (await respuesta.text()).replace(/\r\n/g, "\n").replace(/\s+$/, "");
    if (leccionActual() !== leccion) return;
    const lineas = colorear(codigo)
      .split("\n")
      .map((linea) => `<span class="codigo__linea">${linea || " "}</span>`)
      .join("");
    contenedor.innerHTML = `<pre><code>${lineas}</code></pre>`;
  } catch (e) {
    if (leccionActual() !== leccion) return;
    contenedor.innerHTML = `
      <div class="codigo__aviso">
        <p>No se puede mostrar el código aquí porque abriste <code>lecciones.html</code> directamente desde la carpeta.</p>
        <p>Abre <code>${escapar(ruta)}</code> en tu editor para leerlo, o usa <strong>Live Server</strong> en VS Code para verlo en este panel (ver README).</p>
      </div>`;
  }
}

const rutaURL = (ruta) => ruta.split("/").map(encodeURIComponent).join("/");

// ---------- Ejecutar la lección en un iframe ----------

let ejecucion = 0;
let lineasImpresas = 0;

// Esta función no se ejecuta aquí: se copia dentro del iframe, antes del código de la lección.
// Cambia console.log (y compañía) para que, además de lo normal, mande el texto al visor.
function espiarConsola(id) {
  const enviar = (datos) => parent.postMessage({ visor: id, ...datos }, "*");

  const formatear = (v, prof = 0, vistos = new WeakSet()) => {
    const anidado = (x) => formatear(x, prof + 1, vistos);
    if (typeof v === "string") return prof ? JSON.stringify(v) : v;
    if (typeof v === "function")
      return /^class\b/.test(Function.prototype.toString.call(v)) ? `class ${v.name}` : `ƒ ${v.name || "anónima"}()`;
    if (typeof v === "symbol") return v.toString();
    if (typeof v === "bigint") return `${v}n`;
    if (v === null || typeof v !== "object") return String(v);
    if (vistos.has(v)) return "[Circular]";
    if (v instanceof Element) {
      const id = v.id ? `#${v.id}` : "";
      const clases = typeof v.className === "string" && v.className ? `.${v.className.trim().split(/\s+/).join(".")}` : "";
      return `<${v.tagName.toLowerCase()}${id}${clases}>`;
    }
    if (v instanceof Error || v instanceof DOMException) return `${v.name}: ${v.message}`;
    if (v instanceof Date) return v.toString();
    if (v instanceof RegExp) return String(v);
    if (v instanceof Promise) return "Promise {…}";
    if (prof > 3) return Array.isArray(v) ? "[…]" : "{…}";
    vistos.add(v);

    const bloque = (abre, cierra, partes) => {
      const enLinea = `${abre}${partes.join(", ")}${cierra}`;
      if (enLinea.length <= 72 && !enLinea.includes("\n")) return enLinea;
      const sangrado = partes.map((p) => "  " + p.replace(/\n/g, "\n  ")).join(",\n");
      return `${abre.trimEnd()}\n${sangrado}\n${cierra.trimStart()}`;
    };

    if (Array.isArray(v)) {
      const partes = [];
      for (let i = 0; i < v.length; i++) partes.push(i in v ? anidado(v[i]) : "<vacío>");
      return bloque("[", "]", partes);
    }
    if (v instanceof Map)
      return bloque(`Map(${v.size}) { `, " }", [...v].map(([k, x]) => `${anidado(k)} => ${anidado(x)}`));
    if (v instanceof Set) return bloque(`Set(${v.size}) { `, " }", [...v].map(anidado));
    if (v instanceof NodeList || v instanceof HTMLCollection)
      return bloque(`${v.constructor.name}(${v.length}) [`, "]", [...v].map(anidado));
    if (v instanceof Event) return `${v.constructor.name} { type: "${v.type}", target: ${anidado(v.target)} }`;
    if (typeof Response !== "undefined" && v instanceof Response)
      return `Response { status: ${v.status}, ok: ${v.ok}, url: "${v.url}" }`;

    const nombre = v.constructor && v.constructor !== Object ? `${v.constructor.name} ` : "";
    const claves = Object.keys(v);
    if (!claves.length) return `${nombre}{}`;
    const partes = claves.map((k) => {
      const clave = /^[A-Za-z_$][\w$]*$/.test(k) ? k : JSON.stringify(k);
      return `${clave}: ${anidado(v[k])}`;
    });
    return bloque(`${nombre}{ `, " }", partes);
  };

  const texto = (args) => args.map((a) => formatear(a)).join(" ");
  ["log", "info", "warn", "error", "debug", "dir", "table"].forEach((metodo) => {
    const original = console[metodo].bind(console);
    console[metodo] = (...args) => {
      original(...args);
      enviar({ tipo: metodo, texto: texto(args) });
    };
  });
  const limpiarOriginal = console.clear.bind(console);
  console.clear = () => {
    limpiarOriginal();
    enviar({ tipo: "clear" });
  };

  addEventListener("error", (e) => {
    if (e.target !== window) return; // un <img> o <script> que no cargó
    enviar({ tipo: "excepcion", texto: e.message, linea: e.lineno, archivo: e.filename });
  });
  addEventListener("unhandledrejection", (e) =>
    enviar({ tipo: "excepcion", texto: `Promesa rechazada sin .catch(): ${formatear(e.reason)}` })
  );
}

const CSS_PAGINA = `
  body { font: 15px/1.5 system-ui, sans-serif; margin: 12px; color: #1f2328; background: #fff; }
  input, button { font: inherit; }`;

function ejecutar(leccion) {
  const id = ++ejecucion;
  lineasImpresas = 0;
  $("#consola").innerHTML = "";
  escribirConsola("sistema", `Ejecutando ${leccion.ruta}…`);

  const pagina = leccion.pagina || {};
  const base = new URL(".", location.href).href;
  const src = `${rutaURL(leccion.ruta)}?v=${Date.now()}`;
  $("#pagina").srcdoc = `<!DOCTYPE html>
<html lang="es"><head><meta charset="UTF-8"><base href="${base}">
<style>${CSS_PAGINA}${pagina.css || ""}</style>
<script>(${espiarConsola})(${id})</script>
${leccion.modulo.retos ? `<script src="retos/probar.js"></script>` : ""}
</head><body>${pagina.html || ""}
<script src="${src}" onerror="parent.postMessage({ visor: ${id}, tipo: 'noCarga' }, '*')"></script>
<script>parent.postMessage({ visor: ${id}, tipo: 'fin' }, '*')</script>
</body></html>`;
}

const PISTAS = [
  [/is not defined/, "Estás usando una variable o función que no existe. Revisa que esté bien escrita y declarada antes de usarla."],
  [/before initialization/, "Usas una variable let/const antes de la línea donde se declara."],
  [/is not a function/, "Intentas llamar con () a algo que no es una función."],
  [/is not a constructor/, "Usas new con algo que no es una clase ni una función constructora."],
  [/Cannot (read|set) propert(y|ies) of (undefined|null)/, "Intentas usar una propiedad de algo que vale undefined o null. Revisa de dónde sale ese valor."],
  [/Assignment to constant variable/, "No se puede cambiar el valor de una const. Usa let si necesitas cambiarla."],
  [/has already been declared/, "Declaraste dos veces la misma variable con let o const."],
  [/Unexpected|missing \)|Invalid or unexpected token/, "Error de escritura (sintaxis): suele faltar o sobrar un paréntesis, una llave, una coma o una comilla."],
  [/Maximum call stack/, "Una función se llama a sí misma sin parar (recursión infinita)."],
  [/Failed to fetch|NetworkError|Load failed/, "No se pudo conectar con el servidor. Revisa tu conexión a internet."],
  [/^Script error\.?$/, "Hubo un error, pero el navegador oculta los detalles al abrir el archivo directamente. Pulsa F12 para verlo en la consola del navegador, o usa Live Server."],
];

window.addEventListener("message", (e) => {
  const datos = e.data;
  if (!datos || datos.visor !== ejecucion) return;
  const consola = $("#consola");
  if (!consola) return;

  switch (datos.tipo) {
    case "clear":
      consola.innerHTML = "";
      escribirConsola("sistema", "La lección limpió la consola (console.clear).");
      break;
    case "excepcion": {
      lineasImpresas++;
      const linea = datos.linea ? ` (línea ${datos.linea})` : "";
      escribirConsola("error", `Error sin capturar${linea}: ${datos.texto}`);
      const pista = PISTAS.find(([patron]) => patron.test(datos.texto));
      if (pista) escribirConsola("pista", pista[1]);
      break;
    }
    case "noCarga":
      escribirConsola("error", "No se encontró el archivo de la lección. ¿Lo renombraste o lo moviste? Actualiza visor/curso.js.");
      break;
    case "fin":
      // Damos un momento a timers y promesas antes de decir que no salió nada.
      setTimeout(() => {
        if (datos.visor !== ejecucion || lineasImpresas > 0 || !$("#consola")) return;
        const usaPagina = !$(".panel--pagina").hidden;
        escribirConsola(
          "sistema",
          usaPagina
            ? "Esta lección no imprimió nada en la consola: mira el resultado en el panel «Página»."
            : "Esta lección no imprimió nada. Prueba a añadir console.log(algunaVariable) al archivo para ver qué contiene."
        );
      }, 1500);
      break;
    default:
      lineasImpresas++;
      escribirConsola(datos.tipo, datos.texto);
      // retos/probar.js escribe esta línea cuando pasan todas las pruebas: el reto cuenta como hecho.
      if (datos.texto.startsWith("🎉") && leccionActual()?.modulo.retos) {
        vistas.add(leccionActual().ruta);
        guardarProgreso();
        pintarMarcar();
      }
  }
});

function escribirConsola(tipo, texto) {
  const consola = $("#consola");
  const linea = document.createElement("div");
  linea.className = `consola__linea consola__linea--${tipo}`;
  linea.textContent = texto;
  consola.append(linea);
  consola.scrollTop = consola.scrollHeight;
}

// ---------- Menú en pantallas pequeñas ----------

const menu = $("#menu");
function cerrarMenu() {
  document.body.classList.remove("menu-abierto");
  menu.setAttribute("aria-expanded", "false");
}
menu.onclick = () => {
  const abierto = document.body.classList.toggle("menu-abierto");
  menu.setAttribute("aria-expanded", abierto);
};

// ---------- Arranque ----------

window.addEventListener("hashchange", mostrar);
pintarProgreso();
mostrar();
