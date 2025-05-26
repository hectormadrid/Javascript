/* 
const suma  = (a,b, ...rest) => {
    console.log (rest);

}
suma(1,2,3,4);  */

const logMsg = (desc, ...msgs)  =>{
    for (let msg of msgs) {
        console.log(desc, msg);
    }
}

/* logMsg('servidor:','error1', 'peticion aceptada','socket activo') 
 */
let mensajes = ['error1', 'peticion aceptada', 'socket activo']; 

logMsg('Cliente movil:',...mensajes,'Otro error');