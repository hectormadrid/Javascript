// ===== Reto 3: Animales =====
// Crea tres clases:
//   - Animal: su constructor recibe un nombre. Su método hablar() devuelve "<nombre> hace un ruido".
//   - Perro, que hereda de Animal y cambia hablar() para que devuelva "<nombre> dice guau".
//   - Gato, que hereda de Animal y cambia hablar() para que devuelva "<nombre> dice miau".
//
// Ejemplo:
//   new Perro("Toby").hablar()  →  "Toby dice guau"
//
// Pista: class Perro extends Animal { ... }. No hace falta repetir el constructor.
// Repasa: 13-clases/05-herecia.js y 13-clases/06-method-override.js

class Animal {
  // Escribe tu código aquí
}

// Escribe aquí las clases Perro y Gato

// ===== Pruebas (no hace falta tocarlas) =====
probar("un animal cualquiera", () => new Animal("Nemo").hablar(), "Nemo hace un ruido");
probar("un perro", () => new Perro("Toby").hablar(), "Toby dice guau");
probar("un gato", () => new Gato("Misi").hablar(), "Misi dice miau");
probar("un perro también es un Animal", () => new Perro("Toby") instanceof Animal, true);
