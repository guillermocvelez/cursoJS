/**
 * Los parámetros Rest son una forma de agregar parámetros infinitos a una punción.
 */

//Esta es una función con dos parámetros normales, pero qué pasa si necesitamos sumarmás?
function sumar(a,b){
    return a+b;
}
console.log(sumar(3,4));

function sumar2(a,b,...c){
    return a + b + c;
}

//nos sirve para sumar dos valores
console.log(sumar2(3,5));

console.log(sumar2(3,4,5));


//Si tememos dos arrelgos
const arr1 = [1,2,3,4,5];
console.log(arr1);
const arr2 = [5,6,7,8,9];

//con el spread operator podemos pasar todos los elementos sin necesidad de ciclos
const arr3 = [...arr1 , ...arr2];

console.log(arr3);