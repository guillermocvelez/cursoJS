/**
 * DESTRUCTURACIÓN
 */

const numeros = [1,2,3,4,5,6,7,8];

/**
 * El concepto de destructuración nace en ES6 con la finalidad de ahorrar código. Consiste en almacernar automáticamente en varias variables los items de un arreglo o las propiedades de un objeto. Es muy útil cuando queremos asignar varias propiedades de un objeto a sus respectivas variables fuera del objeto
 */
let [uno ,dos, tres, cuantro, cinco] = numeros;

console.log(uno ,dos, tres, cuantro, cinco);

/**
 * En este caso para lograr el mismo resultado nos tocaría escribir:
 * nombre = persona.nombre;
 * apellido = persona.apellido
 * edad = porsona.edad
 */
let persona = {
    nombre: "Guillermo",
    apellido: "Castaño",
    edad: 19
};

/**
 * La variable que pretendo asignar debe ser igual a la propiedad del objeto. Este concepto es muy importante. No importa que no respetemos el orden
 */
let {nombre,apellido,edad} = persona;
console.log(nombre,apellido,edad);