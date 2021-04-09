//FUNCIONES

/**
 * En todos los lenguajes de programación, una función es un bloque de códico autocontenido(tiene su propio scope) y se puede ejecutar en cualquier momento
 * Pueden o no recibir parámetros y pueden o no retornar un valor.
 * Las funciones también se consideran objetos y son ciudadanos de primera clase porque se pueden asignar como valor, podemos retornar la ejecución de una función adicional.
 * 
 */

const a = 10;
const b = 20;
let result;

//FUNCIONES DECLARADAS

suma(); //Cuando son funciones declaradas, no importa si la iniciamos antes de declararla ya que el Hoisting funciona para las funciones

//Sin parámetros y sin retorno
function suma (){
    result = a+b;
    console.log(result);
}

//Las funciones hay que llamarlas - ir a la linea 14
suma();

//sin parámetros con retorno
function suma (){
    result = a+b;
    return result;
}
console.log("Suma sin parámetrps y sin retorno "+suma());

//Con parámetros
function otraSuma(a,b){
    //en este caso no nos pisamos los valores de a y b ya que tienen scope de función
    let resultado = a + b;
    return resultado;
}
console.log(otraSuma(7,8));


//FUNCIONES EXPRESADAS

//Le asignado a una variable lo que retorne una función
let funcionExpresada = valorFuncionExpresada();

function valorFuncionExpresada(){
    console.log("Me Expresaron");
}

//Función anónima

const fn = function(){
    return console.log("Función anónima");
}

