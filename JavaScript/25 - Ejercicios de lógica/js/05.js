//5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".

const invertir = (cadena)=>{
    (cadena === "" ? console.log("La cadena no puede ser vacía")
        : console.log(cadena.split('').reverse().join('')))
}

export default invertir;