/**
 * MAPS
 * Los maps son objetos que nos sirven para almacenar un conjunto de valores asociados a manera de objeto, realmente es un on objeto primitivo
 */

//Como todo en JS es un objeto, declaramos un nuevo map de la siguiente manera
let mapa = new Map();

//de esta forma se le asignan valores al mapa
mapa.set("nombre","Guillermo")
mapa.set("apellido","Castaño")
mapa.set("edad",37)

console.log(mapa);
console.log(mapa.size);
//Se pueden usar los getters y setters para obtener propiedades de un map
console.log(mapa.get("nombre"));
//podemos borrar propiedades
mapa.delete("edad");
console.log(mapa);

//Mapa es un elemento iterable, lo podemos recorrer con un for-off

for(let [key,value] of mapa){
    console.log(`Llave: ${key}, Valor: ${value}`);
}

//Los maps son objetos que nos permite tener variables de llave valor, pero la diferencia es que el nombre de todas las propiedades de lo sobjetos son cadenas de texto, en los mapas podemos generar llaves que tengan cualquier tipo de dato primitivo (null, number etc), esto se desaconseja

mapa.set(19,"Diez y nueve");
mapa.set(false,"falso");
mapa.set({},{})
console.log(mapa);


for(let [key,value] of mapa){
    console.log(`Llave: ${key}, Valor: ${value}`);
}