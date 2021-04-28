 
//9) Programa una función que obtenga un numero aleatorio entre 501 y 600.

export function aleatorio(){
    console.log(Math.floor(600 - Math.random()*100));    
}


//10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.

export function capicua(num){

    const num1 = num.toString();
    const num2 = num.toString().split('').reverse().join(''); 
    
    (num1 === num2 ? console.log("Es capicula") : console.log("No es capicua"))
    

}

/*
11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.
  */

export function factorial(num){
    let factorial = 1;
    for(let i = 1; i <= num; i++){
        factorial = factorial*i
    }
    console.log(`El factorial de ${num} es ${factorial}`);
}

