/**
 * NOS PERMITEN TRABAJAR DE UNA MANERA MÁS AMIGABLE CON LA INTERFACE DE LOS ITERADORES
 */

//El asterísco de lade de la palabra reservada function le dise a JS que esa función es un iterable
//Los generadores nos sirven para voler iteradores a una función - si la tenemos que ejecutar por partes y necesitamos varios retuns.
function* iterable(){
    //un yield es como un return para iteradores
    yield "hola";
    console.log("Hola Consola");
    yield "hola2";
    console.log("Seguimos con más instrucciones");
    yield "hola 3";
    yield "hola 4"
}

let iterador = iterable();
//Siempre que el código encuentre un next del iterador, lafunción va a llamar al siguiente yield y ejecutará todo el código que se encuentre entre ellos
console.log(iterador.next());
console.log(iterador.next());

for(let y of iterador){
    console.log(y);
}


//De esta manera podemos guardar todos los resultados parciales en un arreglo
const arr = [...iterable()];
console.log(arr);