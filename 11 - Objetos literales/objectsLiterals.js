/**
 * OBJECTS LITERALS
 * 
 */


//Esta es la forma antigua de declarar objetos y métodos en JS
let nombre = "Luna";
let edad = 7;

const gato = {
    nombre:nombre,
    edad:edad,
    maullar:function(){
        console.log("miau miau");
    }
}

console.log(gato);
gato.maullar();

//Esta es la forma nueva
/**
 * JS lo que entiende es que si el nombre de la propiedad es el mismo que el de la variable que se quiere asignar, simplemente lo asigna sin necesidad de los dos puntos, esto facilita y agiliza la escritura
 */

const gato2 = {
    nombre,
    edad,
    //para los métodos nos permite quitar la palabra reservada function y declarar el método solo con el nombre y los paréntesis(parámetros incluidos)
    maullar(){
        console.log("miau2 miau2");
    }
}

console.log(gato2);
gato2.maullar();