"use strict";
/**
 * ARREGLOS
 *
 * AL igual que en js, ts nos permite definir una variable para almacenar un conjunto de dato
 * Hay dos notaciones, [] o via la clase Array
 */
//Notación por []
//Ecplícito
var users;
users = ["memo", "caro", "lau"];
//La diferencia entre este y los arreglos de JS es que en los arreglos de Ts solo podemos agregar elementos del tipo indicado
//Inferido
var otherUsers = ["mono", "isis", "Luna"];
//Notación Array<tipo>
var pictureTitles;
pictureTitles = ["landscape", "vacaciones", "perro"];
//Accediendo a los valores en un array
//ts soporta el uso de índices para acceder a los valores de un arreglo
console.log("Primer usuario", users[1]);
//Propiedades en Array
console.log(users.length);
//uso de funciones en arreglo al igual que en js
users.push("sol");
users.sort();
console.log(users);
