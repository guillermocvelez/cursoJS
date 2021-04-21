/**
 * EL tipo any se usa para capturar valores dinámicos
 * Los valores puyeden cambiar en el tiempo
 * APis Externas
 * Librerías de terceros
 */

//Tipo explícito
let idUser: any;
idUser = 1; //Number
idUser = '1';//La variable any admite cualquier tipo de dato

console.log(idUser);

//typo inferido
let otherUd;//Si hacemos hover vemos que ts infiere el tipo any

let surprise: any = 'Hello typescript';

const res = surprise.substring(6);//la función substring me genera una cadena desde el index indicado
console.log(res);

