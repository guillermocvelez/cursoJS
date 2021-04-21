"use strict";
/**
 * ENUMERADOS
 * Los enumerados permiten definir un conjunto de valores con nombre
 * Permiten asignar una variable amigable para valores numéricos que se adaptan al contexto de nuestra aplicación
 */
//
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
var Landscape = PhotoOrientation.Landscape;
console.log('landscape', Landscape);
/**
 * Tambien podemos hacer enum coc claves, como si fueran objetos
 */
var Country;
(function (Country) {
    Country["Bolivia"] = "bol";
    Country["Colombia"] = "col";
    Country["Mexico"] = "mex";
})(Country || (Country = {}));
var country = Country.Colombia;
console.log(country);
