const usuario = [
  { edad: 17, nombre: "Hector", plan: "Premium" },
  { edad: 13, nombre: "Juan", plan: "Free" },
  { edad: 32, nombre: "Pablo", plan: "Free" },
];

const users = [
  { age: 22, name: "Fernando", membership: "Premium" },
  { age: 27, name: "Kevin", membership: "Free" },
  { age: 29, name: "Olga", membership: "Free" },
];

const usersEspanol = users.map((u) => ({
  edad: u.age,
  nombre: u.name,
  plan: u.membership,
}));

const todos = [...usuario, ...usersEspanol];

todos.sort((a, b) => {
  if (a.edad < b.edad) {
    return 1;
  }
  if (a.edad > b.edad) {
    return -1;
  }
  return 0;
});

const lista = todos.map((u) =>`<li>Nombre: ${u.nombre}, Edad: ${u.edad} </li>`);
//*para un salto de linea se le da un enter
const html = `
<ul> 
    ${lista.join(` 
        `)}

</ul>
`;
console.log(html);
