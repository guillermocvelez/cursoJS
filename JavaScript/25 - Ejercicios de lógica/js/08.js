//8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5. */

export default function eliminarPatron(cadena,patron){
    (!cadena)
     ? console.warn("No ingresante texto")
     : (!patron)
        ? console.warn("NO ingresaste patron")
        : console.info(cadena.replace(new RegExp(patron,"ig"),""))
    
}

