// Ayudante para comprobar los retos. No hace falta tocarlo.
//
// Uso:  probar("descripción", () => loQueQuieresComprobar, valorEsperado);
//
// Escribe ✅ en la consola si el resultado es el esperado y ❌ si no, y al final
// un resumen. También funciona con promesas (para los retos asíncronos).
//
// El visor lo carga solo. Para usarlo con Node:
//   node -r ./retos/probar.js retos/01-basicos/01-saludar.js

(function () {
  let total = 0;
  let superadas = 0;
  let pendientes = 0;
  let resumenProgramado = false;

  function mostrar(valor) {
    if (valor === undefined) return "undefined (¿te falta el return?)";
    if (typeof valor === "number" || typeof valor === "boolean") return String(valor);
    if (typeof valor === "function") return "una función";
    if (valor instanceof Error) return `Error: ${valor.message}`;
    try {
      return JSON.stringify(valor);
    } catch (e) {
      return String(valor);
    }
  }

  function iguales(a, b) {
    if (Object.is(a, b)) return true;
    if (typeof a === "number" && typeof b === "number") return Math.abs(a - b) < 1e-9;
    if (!a || !b || typeof a !== "object" || typeof b !== "object") return false;
    if (Array.isArray(a) !== Array.isArray(b)) return false;
    const clavesA = Object.keys(a);
    const clavesB = Object.keys(b);
    if (clavesA.length !== clavesB.length) return false;
    return clavesA.every((clave) => iguales(a[clave], b[clave]));
  }

  function resumen() {
    resumenProgramado = false;
    if (pendientes > 0) return;
    if (superadas === total) console.log(`🎉 ¡Reto superado! Pasaste las ${total} pruebas.`);
    else console.log(`Llevas ${superadas} de ${total} pruebas. ¡Sigue intentándolo!`);
  }

  function programarResumen() {
    if (resumenProgramado) return;
    resumenProgramado = true;
    setTimeout(resumen, 0);
  }

  function comprobar(descripcion, obtenido, esperado) {
    if (iguales(obtenido, esperado)) {
      superadas++;
      console.log(`✅ ${descripcion}`);
    } else {
      console.warn(`❌ ${descripcion}\n   esperaba: ${mostrar(esperado)}\n   obtuve:   ${mostrar(obtenido)}`);
    }
  }

  function fallo(descripcion, error) {
    console.warn(`❌ ${descripcion}\n   dio un error: ${(error && error.message) || error}`);
  }

  globalThis.probar = function (descripcion, calcular, esperado) {
    total++;
    try {
      const obtenido = calcular();
      if (obtenido && typeof obtenido.then === "function") {
        pendientes++;
        obtenido
          .then((valor) => comprobar(descripcion, valor, esperado), (error) => fallo(descripcion, error))
          .finally(() => {
            pendientes--;
            programarResumen();
          });
        return;
      }
      comprobar(descripcion, obtenido, esperado);
    } catch (error) {
      fallo(descripcion, error);
    }
    programarResumen();
  };
})();
