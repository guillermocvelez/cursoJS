/**
 * NULL y UNDEFINED
 */

//Explícita
let nullVariable: null;
nullVariable = null; // nunca nos va a permitir asignar un valor diferente a null


let otherVariable = null; //EL compilador de ts infiere el tipo como any

//Undefined
let undefinedVariable: undefined = undefined; //LA variable solo soporta este tipo de dato

let otherUndefined = undefined; //EL compilador de ts infiere el tipo como any

//Null y Undefined: como subitpos

//--strickNullChecks, el compilador verifica todas las lineas que contienen esta asignación
let albumName: string;
albumName = null;

/**
 * ENCONTRAR UN USO REAL DEL NULL Y UNDEFINED
 */