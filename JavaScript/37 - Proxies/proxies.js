/**
 * <PROXIES
 * 
 * Tiene que ver algo con la POO, es un nuevo mecanimos que tiene JS que permite crear un objeto basado en un objeto literal inicial. Los proxies el algo similar a las clases, pero en vez de clases como plantillas, usa object literals. Genera una copia y se pueden realizar ciertas operaciones. El handeler es el objeto especial que recibe el proxi
 */

//Objeto base
const person = {
    nombre: "",
    apellido: "",
    edad: 0,
};

//De esta manera creo el handler - valida que la estructura del objeto base siempre se cumpla
const handler = {
    set(obj,prop,valor){
        obj[prop] = valor;
    }
}

//Creo un nuevo proxy que me recibe el objeto base y el manejador
const guillermo = new Proxy(person,handler);

console.log(guillermo);//si vemos esto en consola, notamos que JS inicializa las varibales del Proxi

guillermo.nombre = "Guillermo";
guillermo.apellido = "Castaño";
guillermo.edad = 35;
guillermo.twitter = "@guillermocv";//Se le puede agregar valores al objeto Proxi - sin embargo desde el manejador podemos colocar una validación para que no me deje alterar este objeto

/**
 * if(Object.keys(obj).indexOp(prop) === -1){
 *  return console.log("la propiedad "${prop}" no existe en el objeto persona")
 * }
 */

console.log(guillermo);//acá ya debe estar el objeto con sus respectivos valores

