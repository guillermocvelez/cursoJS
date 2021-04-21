"use strict";
/**
 * OBJECT
 * UN valor que no sea primitivo
 */
var user;
user = {
    id: 2,
    nombre: "Memo"
};
console.log("Usuario", user);
/* console.log('user.username', user.username); */ //NO nos deja acceder a las propiedades!!! , esto es porque el tipo object en ts no es lo mismo que el Object de JS
var myObj = {
    id: 2,
    username: "memorando"
};
var isInstance = myObj instanceof Object;
console.log(isInstance);
