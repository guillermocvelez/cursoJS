/**
 * Objeto Consola
 * console es un objeto de JS
 */

//Esto nos loguea en consola - valga la redundancia todos los métodos del objeto consola
console.log(console);
//De esta manera enviamos un error a la consola
console.error("Esto es un error")

//Limpiar Consola
/* setTimeout(() => {
    console.clear()
}, */ 

//Sacar avisos de warning(Amarillos)
console.warn("Esto es un aviso")
//MEnsaje informativo
console.info("Esto es un mensaje informativo");

let nombre = "Memo";
let apellido = "Castaño";
//Separando las variables por comas podemos imprimir en consola todo lo que queramos en una sola linea de código
console.log(nombre, apellido);

//podemos ver el documento HTML
console.log(document);

//Me muestra todas las propiedades objetos metodos etc que tiene el documento
console.dir(document);

console.table(Object.entries(console));

const numeros = [1,2,2,3,4,5,6];

//Nos manda a la consola los datos en forma de tabla
console.table(Object.entries(numeros));