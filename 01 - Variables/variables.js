/**
 * Variables: una variable es una posición de memoria a la cual se le asigna un caler
 * JS es un lenguaje debilmente tipado, eso quiere decir que no se le asigna un tipo de variable(más tarde) al valor, JS asume el tipo,
 */

/**
 * var - la palabra reservada var se utilizaba antes del 2015 para declarar una variable, el problema con var es que se declara con scope global, quiere decir que desde cualquier parte del código se puede acceder, esto genera un problema en aplicaciones modernas que estan 100% hechas en JS
 */

var nombre = "guillermo";
var edad = 37;
var tel = 3446006068;

/**
 * let - en ecmascript6 se introdujo la palabra reservada let, cuyo scope depende del lugar donde se declare, si se declara dentro de un bloque de código adquiere scope dentro del bloque, si se declara al inicio de todo el programa adquiere scope global.
 * let se utiliza para aquellas variables que van a cambiar en el transcurso de la ejecución
 */

let nombre2 = "Carolina";
nombre2 = "Carolina 2";//acá debió cambiar en valor de la variable

/** 
 * const - al igual que let, const se introdujo con ES6, y tiene la misma explicación sobre el scope. Solo se diferencian en que const no se puede reasignar, siempre va a tener el mismo valor, de lo contrario va a salir un error de ejecución
 */

const tel = 311656568;
tel = 325686; //no se puede, saldrá un error

/**
 * SOBRE LOS NOMBRES DE LAS VARIABLES
 *  - no deben contener espacios
 *  - no deben comenzar con un número o signo, excepto $
 *  - es buena práctica al tener dos palabras usar la notación camelCase 
 *  - si es una constante que se va a utilizar en toda la app, se declara en mayúsculas PI, URL, y con const
 */