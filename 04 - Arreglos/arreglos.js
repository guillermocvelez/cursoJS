/**
 * ARREGLOS
 * Los arreglos en JS son un tipo de estructura de dato que se usa para guardar varios valores uno después de otros
 */

//Creación de un arreglo:

let mascotas = ["perros","gatos","peces"];
console.log(mascotas);

let edades = [2 , 5 , 6 , 8];
console.log(edades);

let cualquiera = ["Guillermo", 58, true, false, [3 , 4, 5]];
console.log(cualquiera);

/**
 * ACCEDIENDO A INFORMACIÓN DENTRO DEL ARRAY.
 * Para acceder a la información dentro del array se hace como en los otros lenguajes de programación, array[idx]
 */

console.log(mascotas[2]);
console.log(edades[0]);
console.log(cualquiera[3]);
//En este ejemplo, como en el elemento 4 tenemos un arreglo como dato, podemos acceder de esta manera a los datos dentro del el
console.log(cualquiera[4][2]);

//Longitud de un arreglo

console.log(edades.length);

//CONVERSIÓN DE ARREGLOS Y CADENAS

//Con este método de String podemos separar una cadena por un valor y luego guardarla en un array
let datos = "Manizales,Bogotá,Cali,Medellin";
let array = datos.split(',');
console.log(array);

//Este método es el reverso del anterior, une todos los elementos del arreglo y los separa con el caracter ingresado 
let nuevosDatos = array.join(',');
console.log(nuevosDatos);

//método más simple para convertir arreglos en cadenas
let nuevosDatos2 = datos.toString();
console.log(nuevosDatos2);

//AGREGAR Y ELIMINAR ELEMENTOS DEL ARREGLO

//Método push() - agrega uno o más elements al final del arreglo - este método es destructivo, cambia el arreglo original
array.push("Cartagena");
console.log(array);
array.push("Santa Marta","Barranquilla");
console.log(array);

//Eliminar elementos del arreglo con pop() - Elimina el último elemento del arreglo - Cambia el arreglo original
array.pop();
console.log(array);
//Podemos guardar el elemento removido en una variable
let itemRemoved = array.pop();
console.log(itemRemoved);

//Agregar elementos al inicio del arreglo - Cámbia el arreglo original
array.unshift("Ibagué");
console.log(array);

//Elimina el primer elemento del arrelgo - cambia el arreglo original
array.shift();
console.log(array);


//ES6

//Método for Each

/**
 * El método for each ejecuta una función por cada elemento del arreglo.
 * Recibo dos parámetros, el primero es el elemento, que es cada elemento del arreglo, es obligatorio
 * El segundo es el index, que enumera cada elemento del arreglo en caso de que lo necesitemos como en el ejemplo siguiente - este es opcional
 * 
 * Cabe resaltar que elemento e index pueden ser cualquier nombre (el,idx) por ejemplo, sin embargo hay buenas prácticas a tener en cuenta
 * 
 */
//Declaramos un nuevo Array - recordemos que si lo declaramos adentro del bloque forEach el arreglo tiene ese scope, no se puede usar afuera
const newArray = [];
array.forEach((elemento,index)=>{
    
    //AL nuevo array en la posición index le asignamos el valor del elemento convertido a mayúsculas
    newArray[index] = elemento.toUpperCase();
    console.log(newArray[index]);    
});
console.log(newArray);

