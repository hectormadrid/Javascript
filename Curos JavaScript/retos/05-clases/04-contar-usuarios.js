// ===== Reto 4: Contar usuarios =====
// Crea la clase Usuario:
//   - El constructor recibe un nombre.
//   - Usuario.total() es un método STATIC que devuelve cuántos usuarios se han creado.
//   - Usuario.invitado() es un método STATIC que crea y devuelve un usuario llamado "Invitado".
//
// Ejemplo:
//   new Usuario("Ana");
//   new Usuario("Luis");
//   Usuario.total()  →  2
//
// Pista: un contador static (static #creados = 0) pertenece a la clase, no a cada usuario.
// Súmale 1 en el constructor.
// Repasa: 13-clases/03-static.js

class Usuario {
  // Escribe tu código aquí
}

// ===== Pruebas (no hace falta tocarlas) =====
probar("al principio no hay usuarios", () => Usuario.total(), 0);
probar(
  "después de crear 2 usuarios",
  () => {
    new Usuario("Ana");
    new Usuario("Luis");
    return Usuario.total();
  },
  2
);
probar("guarda el nombre", () => new Usuario("Marta").nombre, "Marta");
probar("Usuario.invitado() crea un usuario llamado Invitado", () => Usuario.invitado().nombre, "Invitado");
probar("el invitado también cuenta", () => Usuario.total(), 4);
