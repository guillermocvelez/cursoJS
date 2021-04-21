//Retorna el número de caracteres de una cadena - validando si es una cadena
//1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.

export default function longitudCadena(cadena){

    if(typeof(cadena) === "string"){
        return cadena.length;
    }
    else{
        console.log("El tipo de dato no es una cadena");
    }
    
}