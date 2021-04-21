"use strict";
/**
 * NULL y UNDEFINED
 */
//Explícita
var nullVariable;
nullVariable = null; // nunca nos va a permitir asignar un valor diferente a null
var otherVariable = null; //EL compilador de ts infiere el tipo como any
//Undefined
var undefinedVariable = undefined; //LA variable solo soporta este tipo de dato
var otherUndefined = undefined; //EL compilador de ts infiere el tipo como any
//Null y Undefined: como subitpos
//--strickNullChecks, el compilador verifica todas las lineas que contienen esta asignación
var albumName;
albumName = null;
/**
 * ENCONTRAR UN USO REAL DEL NULL Y UNDEFINED
 */ 
