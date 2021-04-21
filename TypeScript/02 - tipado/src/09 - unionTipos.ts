/**
 * UNION DE TIPOS
 * En typescript se pueden definir variables con múltiples tipos
 */

export {};
//se pueden usar pipes para defirnor que idUser puede recibir por ejempl 1 o '1'
let idUser: number | string;
idUser = 10;
idUser = '10';
console.log(idUser);

//Buscar username dado un ID
function getUsernameById(id: number | string){
    //Lógica de negocio, find the user
    return 'Memorando'
}

getUsernameById(20);
getUsernameById('20');

/**
 * ALIAS DE TIPOS
 * Typescript permite crear un alias como nuevo nombre para un tipo
 * El alias se puede aplicar también a un conjunto o combinación de tipos
 * Se usa la palabra reservada type
 * 
 * Son útiles para evitar la redundancia en la definición de tipos
 */

type Id = number | string;


let idUser2: Id;
idUser2 = 10;

/**
 * TIPOS LITERALES
 * Una variable con un tipo literal puede contener únicamente una cadena del conjunto
 * Se usan cademas como "tipos", combinados con el símbolo de pope ('|') entre ellos
 */


//Ejmeplo - Tenemos un conjunto de reglas y solo recibimos fotos que tengan 100x100, 500x500, 1000x1000

type SqueareSize = '100x100' | '500x500' | '1000x1000';
let smallPicture: SqueareSize = '1000x1000';

