"use strict";
/**
 * Funciones a lestilo js
 */
function createPicture(title, date, size) {
    //se crea la fotografía
    console.log('Create picture using', title, date, size);
}
createPicture('Cumpleaños', '2020-03-10', '100x100');
createPicture('Viaje', '2020-04-12', '1000x1000');
// Parámetros opcionales
//El signo de interrogación justo despueés de la variable, le dice al compilador que este parámetro puedo  o no llegar
function createPicture2(title, date, size) {
    //se crea la fotografía
    console.log('Create picture using', title, date, size);
}
createPicture2('Viaje con parámetros opcionales', '2020-04-12', '1000x1000');
createPicture2('Viaje con parámetros opcionales 02', '2020-04-12');
createPicture2();
//el tercer parámetro queda como undefined por el compilador
//Fat arrow function
var createPic = function (title, date, size) {
    return {
        title: title,
        date: date,
        size: size
    };
};
var picture = createPic('Foto con Arrow', '2020-03-54', '500x500');
console.log(picture);
