/**
 * SÍMBOLOS
 * Symbol es un nuevo dato primitivo introducido en ES6, nos permite crear identificadores únicos de referencia
 */

//si mandamos a imprimir a la consolsla id = id2 nos devuelve true
let id = "hola";
let id2 = "hola"

console.log(id == id2);

let id3 = Symbol("id");
let id4 = Symbol("id2");
console.log(id3 == id4);
//Podemos colocar entre comillas una descripción de la variable, una etiqueta para identificarlo
console.log(id3);
console.log(id4);
console.log(typeof id3);

