/**
 * MÓDULOS EN JS - ES UNA NUEVA FUNCIONALIDAD QUE ESTÁ SOPORTADO EN MÓDULOS MODERNOS
 */
//así importamos algo de un módulo para qué son las llaves? - no se
//Para exportar dos variables las separamos con comas
import saludar, { PI, nombre } from './js/constantes.js';

//Las funciones también las puedo importar
/* import {sumar,restar} from './js/aritmetica.js' */

//Import los objetos
import  {aritmetica } from './js/aritmetica.js'

/**
 * NO SE PUEDE TENER LINEAS DE CÓDIGO EJECUTÁNDOSE ANTES QUE CUALQUIER IMPORTACIÓN DE MÓDULOS
 * 
 */
console.log(PI);
console.log(nombre);

//Puedo llamar las funciones importadas normalmente
/* console.log(sumar(4,4)); */

//Para llamar funciones encapsuladas en un objet lo tenemos que hacer con la notación de punto
console.log(aritmetica.sumar(3,7));
//Cuando export default está sobre una función podemos hacer uso
saludar();

/**
 * SIEMPRE DECLARAMOS LAS VARIABLES DE SEGUNDO
 */


/**
 * DECLARAMOS LAS FUNCIONES
 */

/**
 * PO ÚLTIMO EJECUTAMOS EL CÓDIGO
 */