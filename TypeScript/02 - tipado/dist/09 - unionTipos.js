"use strict";
/**
 * UNION DE TIPOS
 * En typescript se pueden definir variables con múltiples tipos
 */
Object.defineProperty(exports, "__esModule", { value: true });
//se pueden usar pipes para defirnor que idUser puede recibir por ejempl 1 o '1'
var idUser;
idUser = 10;
idUser = '10';
console.log(idUser);
//Buscar username dado un ID
function getUsernameById(id) {
    //Lógica de negocio, find the user
    return 'Memorando';
}
getUsernameById(20);
getUsernameById('20');
var idUser2;
idUser2 = 10;
var smallPicture = '1000x1000';
