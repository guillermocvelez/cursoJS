//7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.

function validarFrase(cadena){
    const cad1 = cadena.split('');
    const cad2 = cadena.split('').reverse().join('');
    console.log(cad1);
    console.log(cad2);

    (cadena === "" ? console.log("La cadena no puede ser vacía")
    : (cad2 == cadena ? console.log("Es un palindromo") : console.log("No es un palindromo")))
    

}

export default validarFrase;