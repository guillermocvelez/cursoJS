/**
 * TEMPORIZADORES
 * Funciones que nos permiten lanzar acciones después de un cierto tiempo
 * setTimeOut - setInterval
 */

/**
 * El setTimeOut recibe un callback y un tiempo expresado en ms
 */

//Este console.log se ejecuta dos segundos después de que la página cargue
setTimeout(() => {
    console.log("Time out");
},2002)


/**
 * El setInterval
 */

//Este código se ejecuta indefinidamente cierto tiempo
/* setInterval(() => {
    console.log("Ejecutando un set interval");
}, 300) */

let temporizador = setInterval(()=>{
    console.log(new Date().toLocaleTimeString());
},1000)

clearTimeout(temporizador)

