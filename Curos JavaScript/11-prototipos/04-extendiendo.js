//*Extendiendo prototipos
Object.prototype.isEqual = function (obj) {};

let x = {};
x.isEqual({ a: 1 });
/*
*lo que te quiero decir es que no extiendas los prototipos de funciones constructoras que
*ya tiene JavaScript como  object, array, string, number, etc.
 */
