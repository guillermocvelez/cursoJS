/**
 * Se parece al casting de tipos en otros lenguajes de programación
 * Usa dos sintaxis <Angle Braket> y (variable as tipo)
 */

//<> - Angle bracket syntax
export{}

let username: any;
username = "guillermocv";

//tenemos una cadea, TS confía en mi!!
let message: string = (<string>username).length > 5 ? console.log("Hola") : console.log("paila");


console.log(message);

//Este no lo entendí - profundizar en la documentación


