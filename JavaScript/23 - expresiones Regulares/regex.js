/**
 * EXPRESIONES REGULARTES
 * 
 * 
 */

//La definimos como un objeto - recibe dos parámetros. Patrón:    .Banderas:  new RegExp(parametro,bandera)
/**
 * Consultar banderas!!!
 */

let exReg = new RegExp("/\d","ig")

//de forma normal - entre dos slash
let expReg = /animi/; 

cadena = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque beatae architecto animi sapiente eaque accusantium voluptas veniam quibusdam ipsum ut. animi"

//de esta forma evaluamos si la variable almacenada como expresión regular está en una cadena
console.log(exReg.test(cadena));

//me define todas las coincidencias
console.log(expReg.exec(cadena));