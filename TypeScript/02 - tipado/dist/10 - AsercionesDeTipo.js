"use strict";
/**
 * Se parece al casting de tipos en otros lenguajes de programación
 * Usa dos sintaxis <Angle Braket> y (variable as tipo)
 */
Object.defineProperty(exports, "__esModule", { value: true });
var username;
username = "guillermocv";
//tenemos una cadea, TS confía en mi!!
var message = username.length > 5 ? console.log("Hola") : console.log("paila");
console.log(message);
//Este no lo entendí - profundizar en la documentación
