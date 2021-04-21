/**
 * FUNCIONES FLECHAS
 * Es una implementación de ES6 para  mejorar la escritura de métodos y funciones.
 * Nueva forma de definir funciones anónimas expresadas, una función expresada es cuando a una variable se le asigna el valor de una función naónima
 */

//función expresada

const saludar = function(){
    console.log("hola");
}

console.log(saludar());

//Arrow fuction - quitamos la palabra function

const saludar2 = () => {
    console.log("Holaaaa");
}

console.log(saludar2());

/**
 * Cuando la funcioón tiene una sola linea se pueden quitar las llaves:
 * const saludar2 = () => console.log("Holaaaa");
 */

let suma = (a,b) => a+b;
console.log(suma(3,3));
/**
 * Cuando una función flecha recibe solo un parámetro, no es necesario colocar los paréntesis.
 * Las funciones flecha de una linea tienen un retgurn implícito
 */

/**
 * LAs arrow function capturan el this dependiendo del contexto donde se encuentren
 */

function gato(){
    console.log(this);
}
gato() //como la función existe dentro del contexto del navegador ..this se vuelve el objeto window

//En este ejemplo this es el objeto gato2
const gato2 = {
    nombre: "luna",
    maullar(){
        console.log(this);
        console.log(this.nombre);
    }
}
console.log(gato2.maullar());

//Si pongo una arrow function en el objeto, me captura el objeto window, por eso no se recomienda declarar arrow function dentro de objetos
const gato3 = {
    nombre: "isis",
    maullar: () => {
        console.log(this);
    }
}
console.log(gato3.maullar());