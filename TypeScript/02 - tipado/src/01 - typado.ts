/**
 * TIPADO
 * EN typeScript podemos definir variable de manera explícita, quiere decir que debemos indicar el tipo dato que tiene la variable, auunque también está el implícito como en JS, el cual infiere que tipo de dato estamos usando.
 * 
 * Debemos utilizar la notación postfija para la notación explícita:  nombreVariable : tipoDato
 * Para la notación implícita debemos declarar la variable y asignar un valor inicial, así typeScript le asigna el tipo
 * 
 */

/**
 * Tipo Number
 * Valores numéricos, hexadecimales, binarios, ocatales
 */

//Number Explícito

let phone: number;
phone = 87730322;
/* phone = "hola";//Produce un error */

//Number Inferido
let phone2 = 8974513;//si situamos el mouse encima de la variable vemos que el compilador le asigna el number
//De igual manera nos produce un error si le re-asignamos otro tipo de cariable a number

//Hexadecimal
let hex: number = 0x98fa66;//la notación hex debe empezar por 0x seguido de máximo 6 valores ente 0-9 a-f

//Binario
let binary: number = 0b1010; //los binarios deben comenzar con 0b

//Octal
let octal: number = 0o744 // El valor octal debe comenzar por 0o seguido por numeros entre 1 y 7

//Boolean
let isPro: boolean; //Explícita
isPro = true;


//String
let username: string = 'GUillermoCastaño';
/* username = true  - Nos saca un error en este caso, la variable ya está tipada */


//Template string
//USo de backtick ` ` - Comillas francesas
let userInfo: string;
userInfo = `Podemos definir un texto libre
con saltos de linea y podemos usar otras variables como telefono = ${phone}`;

console.log(userInfo);
