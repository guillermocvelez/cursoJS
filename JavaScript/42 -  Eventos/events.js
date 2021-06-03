/**
 * EVENTOS
 */

//FLUJO DE EVENTOS

const $divsEventos = document.querySelectorAll(".eventos-flujo div");
console.log($divsEventos);

function flujoEventos(e){
    console.log(`Hola te saluda ${this.className}, el click lo originó ${e.target.className}`);
    e.stopPropagation();
}

//El AddEventListener tiene otro parámetro, true or false, false es la fa de burbuja, true es la fase de captura, o sea se invierte 
$divsEventos.forEach(div  => {
    div.addEventListener("click",flujoEventos)
})

/**
 * CON ESTE MÉTODO STOP PROPAGATION Y CON LA FASE DE CAPTURA HUBIERA PODIDO SOLUCIONAR EL PRIMER REQUERIMIENTO DE DIREKTIO, CERRAR CON CLICK AFUERA
 */

/*
    BOOM - Browser Object Model
*/

console.log(window.innerWidth);
console.log(window.innerHeight);
console.log(window.outerWidth);
console.log(window.outerHeight);

window.addEventListener("resize", (e)=>{
    console.log(e);
})

console.log(window.origin);
console.log(location.protocol);
console.log(location.host);
console.log(location.href);
console.log(location.search);

console.log("***************OBJETO HISTORIAL******************");

console.log(history);
console.log(history.length);



console.log("***************OBJETO NAVIGATOR******************");
console.log(navigator);          
console.log(navigator.connection);          
