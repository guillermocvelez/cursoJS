"use strict";
/**
 * TUPLAS
 * Las tuplas nos permiten expresar un arreglo con un número fijo de elementos
 * Los tipos de datos son conocidos y diferentes para cada una de las posiciones
 */
Object.defineProperty(exports, "__esModule", { value: true });
var userDos;
userDos = [1, "memorando"];
console.log(userDos);
//Podemos acceder a los valores y aplicar el uso de propiedades de arreglos(funciones), eso si si le aplicamos la función a un elemento en específico como las tuplas sin tipadas según elemento, las funciones tienen que ser correspondientes al tipo (uppercase en strings)
var userInfo;
userInfo = [2, 'papparazzi', true];
console.log(userInfo);
//Arreglo de tuplas
var arrayTupla = [];
arrayTupla.push([1, "memorando"]);
arrayTupla.push([2, "caro"]);
arrayTupla.push([3, "Isis"]); //posición 2
console.log(arrayTupla);
//Reasignar valores a un arreglo de tuplas - modificaremos ISIS
arrayTupla[2][1] = arrayTupla[2][1].concat('001');
console.log(arrayTupla);
