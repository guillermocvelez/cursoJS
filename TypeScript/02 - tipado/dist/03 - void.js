"use strict";
/**
 * Void es lo opuesto a nay: representa la ausencia de tipo
 * Comunmente se unsa como tipo de retorno en funciones
 */
//Void
//Tipo explícito
//Si hacemos hover sobre el nombre de la función, vemos que ts le asigna el valor void a esta, ya que no retorna nada, si le colocamos un return ts le asigna el tipo de valor que retorna la función
function showInfo(user) {
    console.log("User Info", user.id, user.username, user.firstname);
}
showInfo({ id: 1, username: "memorando", firstname: "Guillermo" });
//tipo inferido
function showFormatterInfo(user) {
    console.log("user Info", "\n        id: " + user.id + ",\n        username: " + user.username + ",\n        firstname: " + user.firstname + "\n    ");
}
showFormatterInfo({ id: 1, username: "memorando", firstname: "Guillermo" });
//Una variable de tipo void se puede asignar null y undefined unicamente
var unusable;
unusable = undefined;
//tipo Never - Representa un valor que nunca ocurre, lo utilizamos cuando una función lanza algún tipo de error, o cuando la función tiene un ciclo infinito y no permite que finalice
function handleError(code, msg) {
    //Process your code here
    //Generamos un mensaje
    throw new Error(msg + ". code:" + code);
}
try {
    handleError(404, 'Not Found');
}
catch (error) {
}
//Simulamos un ciclo infinito
function someNumbers(limit) {
    var suma = 0;
    while (true) {
        suma++;
    }
    //Nunca retornamos la suma acumulada
}
someNumbers(10);
/**
 * IMPORTANTE ENCONTRAR UN USO REAL DEL VOID Y NEVER
 */ 
