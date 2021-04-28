/**
 * ITERABLES E ITERADORES
 * 
 * Estructura de tados lineal que hace que sus datos sdean públicos y se puedan recorrer. 
 * Nodos del hom, cadenas de texto, Strings, arreglos, maps, seta
 * Iterable es el elemento, el iterador es el apuntador que recorre(mecanimos) los elementos.
 * mecanismos - destructuración, for, for-of, for-each, arrayfrom, spread, promises
 */

//Ejemplo con Next
const iterable = [1,2,3,4,5,6];
const iterable2 = "Guillermo";

//De esta manera accedemos a una posición especial que tienen todos los iterables, con Symbol.iterator, qu como sabemos es un valor único
const iterador = iterable[Symbol.iterator]();
//También lo podemos declarar como una cadena ya que es un iterable
const iterador2 = iterable2[Symbol.iterator]();

console.log(iterador);
console.log(iterador2);

//metodo especial next, devuelve un objeto con dos propiedades. el valor y una llave que nos indica si ya se acabaron los elementos

/* console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());//hasta acá me devuelve valor, y la llave done se queda en false
console.log(iterador.next()); //Acá no me trade valor, y la llave done se queda en true/*  */ 

//igual con las cadenas
console.log(iterador2.next());
console.log(iterador2.next());
console.log(iterador2.next());
console.log(iterador2.next());
console.log(iterador2.next());
console.log(iterador2.next());
console.log(iterador2.next());
console.log(iterador2.next());
console.log(iterador2.next());
console.log(iterador2.next());


let next = iterador.next();

//así podemos hacer un recorrido sobre el iterable. declarando una variable next a la cual le asignamos el apuntador al iterador
//como sabemos que mientras tenga elementos el done es falso, usamos un while hasta que la llave sea true
while (!next.done){
    console.log(next.value);
    //ojo con este paso, hay que incrementar el iterador, de lo contrario entramos en un ciclo infinito ya que le iterador nunca pasa a la posición "Next"
    next = iterador.next();
}
