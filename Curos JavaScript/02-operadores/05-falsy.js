//short -  circuit

//falso
//false
//0
//""
//null
//undefined
//NaN

let name = "tito";
// se usa otra variable para poder usar la variable name 
let user = name || "anonymous";
console.log(user);


function fn1() {
    console.log(" soy fn1");
    return false;
}

function fn2() {
    console.log(" soy fn2");
    return true;
}

let x = fn1() && fn2();

console.log(x);