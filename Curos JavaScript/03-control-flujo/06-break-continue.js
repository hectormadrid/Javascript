/*
*Van a existir momentos donde tú vas a querer detener la ejecución de algún loop, ya sea while for for
*in for each o también del do while.
*Esto podría ser porque estabas buscando un elemento en particular o porque estabas realizando ciertos
*cálculos y la verdad es que ya no tiene sentido seguir calculando el resto.
*Y es por esta razón que existen las instrucciones de break y continue break.
*Nos permite poder salirnos del loop y continue.
*Nos permite a nosotros poder saltarnos una iteración.
*Te voy a mostrar cómo se implementan.
*/

let i = 0;  
while(i < 10){
    i++; // Incrementa i en 1 en cada iteración.
    if(i === 5){
        continue; // Si i es igual a 5, se salta la iteración actual y continúa con la siguiente.
    } 
    if (i === 8){
        /*
            Ahora vamos a ver la instrucción de break.
            Vamos a suponer que ya encontramos lo que necesitábamos, así que vamos a detener la ejecución de nuestro
            loop.
            Para eso vamos a evaluar si es que i es exactamente igual a cuatro y en el caso de serlo, vamos a utilizar
            la instrucción de break.
            El valor de cuatro no lo está imprimiendo porque nosotros primero realizamos un if para ver si es que
            i vale cuatro aquí mismo y como I vale cuatro, nosotros detenemos la ejecución de nuestro loop while.
       
*/
        break; // Si i es igual a 8, se sale del loop.
    }
   console.log(i);
}
/* 
Esto tú lo puedes utilizar para los for, para for, in, para for of y por supuesto que también para
 do while.
  */