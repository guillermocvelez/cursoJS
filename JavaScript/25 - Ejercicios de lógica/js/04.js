//4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

export default function repetirTexto(cadena,idx){
    for(let i = 0; i < idx; i++){
        console.log(`${cadena}\n  `);
        console.log("\t");
    }
}