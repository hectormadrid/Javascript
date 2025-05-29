function ordenar(texto, fn) {
  let resultado = texto
    .toLowerCase()
    .split("")
    .filter((x) => x !== " ")
    .sort()
    .join("");
    fn(resultado);
}

ordenar("hola mundo", console.log);
