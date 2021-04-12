/**
 * ESTAS PALABRAS RESERVADAS NOS VAN A AYUDAR A CONTROLAR MEJOR NUESTRO CICLOS Y CONDICIONALES.
 * 
 * 
 * La palabra reservada break nos saca de la estructura de control y sigue el flujo normal
 * 
 * La palabra continue ignora esa iteración de la estructura y continua con la siguiente
 * 
 * ESTAS PALABRAS SOLO SE PUEDEN UTILIZAR EN ESTRUCTURAS DE CONTROL
 */

let arreglo = [1,2,3,4,5,6,7,8,9];

//Break
for(let i = 0; i <= arreglo.length ; i++){
    if(arreglo[i] === 5){
        break;
    }
    console.log(arreglo[i]);
}
console.log("Termino la ejecución del Break, como vemos se detuvo cuando el valor fué igual a 5");

for(let i = 0; i <= arreglo.length ; i++){
    if(arreglo[i] === 5){
        continue;
    }
    console.log(arreglo[i]);
}
console.log("Termino la ejecución del Continue, como vemos se omitió el valor 5");