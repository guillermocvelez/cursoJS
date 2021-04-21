/**
 * MDN - En cualquier lenguaje de programación, un string es una secuencia de caracteres usado para representar texto, en JS es un "valor primitivo" y el objeto string es un envoltorio (wrapper) alrededor de un string primitivo.
 * VOCABULARIO:
 * Valores primitivos - un dato que no es un objeto y no tiene métodos (string,number,boolean,undefined y symbol)
 * Wrapper - es una función que tiene como intención llamar una o más funciones.
 *                      
 */

/**String como objeto
 * 
 */

const s1 = "Cadena primitiva";
console.log(s1);

const s2 = new String("Objeto String")
console.log(s2);

/**
 * Acceder a un caracter - Este método funciona tanto para la primitiva como para el objeto
 */
console.log(s1.charAt(2));
console.log(s2.charAt(5));
/**
 * En ES6 la cadena se trata como un arreglo
 */

console.log(s1[3]);
console.log(s2[3]);

/**
 * COMPARACIÓN DE CADENAS
 * En JS se usan los operadores normales para comparar cadenas, estas se comparan por la cantidad de caracteres, incluyendo el espacio
 * el operador == compara el número de caracteres distinguiendo mayúsculas y minúsculas
 * el operador === no distingue
 * 
 * 
 */

const s4 = "memo";
const s5 = "Memo";

console.log(s4 == s5);
console.log(s4 === s5);
//esto nos da false con los dos operadores


//con este método podemos comparar si tienen el mismo tamaño, el método toUpperCase() transforma las cadenas a mayúsculas, en contraparte el método toLowerCase transforma las cadenas a minúscula
console.log(s4.toUpperCase() == s5.toUpperCase());

/**
 * Hay que tener en cuenta que JS distingue entre el objeto String y el valor primitivo string, aunque JS convierte automáticamente todo primitivo en Objeto para poder utilizar métodos
 */

/**
 * Constructor String
 * new String() crea un objeto string
 */

const s6 = new String("Guillermo");

console.log(s6);

//MÉTODOS ESTÁTICOS


//El método String.fromCharCode() devuelve una cadena de texto según los valores univode ingresados, el siguiente método devuelve AACD y que estos son los correspondientes univcode a 65,67,68
console.log(String.fromCharCode(65,65,67,68));

//Este método hace lo mismo que el anterior, pero puede recibir caracteres de 4-bytes 
console.log(String.fromCodePoint(42));


//Este método no hace nada que no haga el template string ` ... `
console.log(String.raw`${s1} ${s2}`);

//PROPIEDADES DE LA INSTANCIA

//calcular el tamaño de la cadena
console.log(s1.length);

//Devuelve el caracter en la posición
console.log(s4.charAt(2));
//devuelve el código utf-16 en la posición
console.log(s4.charCodeAt(2));

//concatena strigs
console.log(s4.concat(s4,s5,s1));

//Devuelve true o false si la cadena contiene la sección indicada
console.log(s4.includes('me'));

//devuelve true o false si la cadena termina con la sección indicada
console.log(s4.endsWith('o'));
console.log(s4.endsWith('1'));

//devuelve el idx del caracter indicado - tener en cuenta que si la cadena tiene caracteres repetidos, devolverá el primero encontrado
console.log(s4.indexOf('m'));

//Este hace lo mismo que el anterior, pero devuelve el idx de la última posición
console.log(s4.lastIndexOf('m'));

//más información sobre expresiones regulares!!! - pero regresa una cadena que es pasada por una expresión regular
cadena = "Para más información, vea Capítulo 3.4.5.1";
expresion = /(capítulo \d+(\.\d)*)/i;
hallado = cadena.match(expresion);
console.log(hallado);


//Este método devuelve una cadena rellenando las posiciones que faltan de la cadena original con la letra indicada, si no se indica letra se llena con espacios
console.log(s4.padEnd(10,'o'));

//Este método hace lo mismo que el anterior pero al inicio, corre la cadena hasta el idx indicado y rellena con el string
console.log(s4.padStart(10,'m'));

//Este método repite la cadena una cantidad de veces
console.log(s4.repeat(4));

//reemplaza una cadena con la cadena indicada - solo reemplaza la primera encontrada
console.log(s4.replace('m','b'));
const regex = /m/i;
console.log(s4.replace(regex,'b'));

//reemplaza TODAS las coincidencias
console.log(s4.replaceAll('m','b'));

//Parte una cadena en los idx indicados
console.log(s6.slice(3,6));


//El siguiente método retorna un array, separa una cadena y cada elemento se parado es un elemento del array
const s7 = "Guillermo Castaño Vélez";
console.log(s7.split(' '));

//Determina si la cadena empieza con la cadena indicada en la posición indicada - si no se indica posición la cadena empieza desde la posición [0]
console.log(s6.startsWith('Gui'));
console.log(s6.startsWith('i',2));

//Devuelve una sub cadena que resulta de las dos posiciones ingresadas
console.log(s6.substr(2,5));


//Convierte una cadena primitiva el objeto especificado - quiere decir que saca la cadena de la instancia
const persona = {
    nombre : "memo",
    edad : 44
}
console.log(persona.toString());
console.log(s7.toString());

const s8 = new String("      memo      ")

//Recorta los espacios en blanco
console.log(s8.trim());

//timStart recorta los espacios al principio - trimEnd recorta los espacios al final de la cadena














