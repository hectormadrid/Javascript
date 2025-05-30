function mixin(Ctr, ...args) {
  Object.assign(Ctr.prototype, ...args);
}

let vuela = {
  vuela() {
    console.log("volando...");
  },
};

let nada = {
  nada() {
    console.log("nadando...");
  },
};
let bano = {
  bano() {
    console.log("yendo al baño...");
  },
};
let camina = {
  camina() {
    console.log("caminando...");
  },
};

// vuela , nada camina , va al baño
function Pato() {
  this.name = "Patito";
}
mixin(Pato, vuela, nada, camina, bano);
//camina, nada, va al baño
function Perro() {}
/* Object.assign(Perro.prototype, nada, bano, camina); */
mixin(Perro,  nada, camina, bano);
//nada, va al baño
function Pez() {}

/* Object.assign(Pez.prototype, nada, bano); */
mixin(Pez,  nada, bano);
//vuela pero no nada, camina ni va al baño
function Avion() {}
/* Object.assign(Avion.prototype, vuela); */
mixin(Avion, vuela);
console.log(Avion.prototype, new Avion());

/*
*principal beneficio que este tiene es que
*después para poder componer las funcionalidades que estás creando en JavaScript es sumamente fácil.

*/
