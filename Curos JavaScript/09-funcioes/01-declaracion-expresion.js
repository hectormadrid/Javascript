console.log(); //* Hoisting -> Izar o levantar 
//* Declaración de funciones : function declaracion

//* funcion nombrada -> Named Function
function suma (){
    console.log(2+2);
}

//* funcion anónima -> Anonymous Function

/* function  (){
    console.log(2-2);
} */

//* Expresión de función -> Function Expression

let resta = function (){ //* Expresión de función anonima : Anonumous Function Expression
    console.log(2-2);
}


let multiplica = function multi (){ //*named Function Expression
    console.log(2-2);
}

//* Fat  Arrow Function 
const divide =() =>{ //* las fat arrow functions siempre sera anonima
    console.log(2/2);
}


