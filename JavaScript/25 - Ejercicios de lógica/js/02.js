//2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

export default function textoRecortado(cadena,idx){
    return cadena.slice(cadena.lenght, idx);
}