/**
 * MANEJO DE ERRORES DE JS
 */



try {
    console.log("En este bloque se agrega el código que se evalua, si se ejecuta un error en el código el catch captura ese error");
    //Produsco un error voluntario usando una variable que no existe

    noExiste;


    console.log("Segundo mensaje del try")
} catch(error){
    //Como no hay error en el Try este mensaje no se imprimirá en consola
    console.log("Captua cualquier error del try");
    console.log(error);
    //AL usar la variable noExiste, este mensaje si se verá en la consola

}finally{
    //El Finally no es obligatorio
    console.log("Se ejecutará siempre al final de un bloque try - catch, sin importar si hay error o no");

}


/**
 * MENSAJES PERSONALIZADOS
 */

try {
    let numero = 10;//si cambiamos esta variable por una letra nos suelta el error
    //isNaN es una función que devuelve verdadero si no es un número
    if(isNaN(numero)){
        //Hay varios tipos de errores, si no estamos seguros lo generalizamos con Error - la palabra reservada throw lanza un error y detiene el try
        throw new Error("El  caracter introducido no es u número")
    }
    console.log(numero*numero);
} catch(error) {
    console.log(error);
}