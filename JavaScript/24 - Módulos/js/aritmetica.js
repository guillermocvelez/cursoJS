/**
 * Así puedo exportar funciones
 */

/* export function sumar(a,b){
    return a + b;
}

export function restar(a,b){
    return a - b
} */



/**
 * Sin embarbo puedo declararlas dentro de un objeto
 */
export function sumar(a,b){
    return a + b;
}

export function restar(a,b){
    return a - b
}

export const aritmetica = {
    sumar,
    restar
}
