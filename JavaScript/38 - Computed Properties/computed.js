/**
 * Un nuevo mecanismo de generar propiedades dentro de un objeto
 */

const objUsuarios = {
    //queremos que el id se genere automáticamente
    //creamos el objeto vacía
}

const usuarios = ["Memo","rando","caro","linaa","lau"];
//vamos a hacer que por cada usuario se genere un id_idx


//De esta manera podemos crear propiedades dinámicas, usando template strings y el ciclo forEach
usuarios.forEach((usuario,index) => objUsuarios[`id_${index}`] = usuario);

console.log(objUsuarios);