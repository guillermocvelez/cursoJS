/**
 * PRIMER MÓDULO
 */

//así decimos que una variable se va a exportar
export const PI = Math.PI;

//EN un archivo puedo exportar lo que necesite, si no necesito exportar nada no lo tengo que declarar export
let usuario = "Jon";
let password = "qwert";

//Si quiero exportar otra cosa - (ver archivo princial)
export const nombre = "Memo";

//También puedo exportar objetos



//cremos una función - export default significa que cuando se exporte ese archivo se exporta automáticamente
//No podemos tener dos cosas exportadas de manera default

export default function saludar(){
    console.log("Estoy saludando");
}