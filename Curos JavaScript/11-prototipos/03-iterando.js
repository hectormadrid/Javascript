function User() {
this.name= 'holamundo';
}

User.prototype.login = function () {
  console.log('iniciando sesión', this.name);
}

let user = new User();


for (let prop in user)
    if(!user.hasOwnProperty(prop))
 console.log(prop);


console.log(Object.keys(user))