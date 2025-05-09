const ahora= new Date(); // * Crea un nuevo objeto de tipo Date
/* console.log(ahora); */ // * Imprime la fecha y hora actual

const fecha = new Date('december 10 2018 GMT-0400'); // * Crea un nuevo objeto de tipo Date
 console.log(fecha); // * Imprime la fecha y hora actual


 const fecha2 = new Date(2014, 10,10, 10); // new Date(año, mes, dia, hora, minutos, segundos, milisegundos)
 console.log(fecha2);

 console.log('datestring',fecha2.toDateString()); // formato para mostrar al usuario
 console.log('datestring',fecha2.toISOString());// formato para almacenar en base de datos
 console.log('datestring',fecha2.toTimeString());// 


fecha2.getDate(); // devuelve el dia del mes
fecha2.getDay(); // devuelve el dia de la semana (0-6)
fecha2.getFullYear(); // devuelve el año
fecha2.getHours(); // devuelve la hora
fecha2.getMilliseconds(); // devuelve los milisegundos
fecha2.getMinutes(); // devuelve los minutos
fecha2.getMonth(); // devuelve el mes (0-11)

fecha2.setDate(10); // cambia el dia del mes
fecha2.setFullYear(2020); // cambia el año
fecha2.setHours(10); // cambia la hora
fecha2.setMilliseconds(10); // cambia los milisegundos
fecha2.setMinutes(10); // cambia los minutos
fecha2.setMonth(10); // cambia el mes (0-11)
