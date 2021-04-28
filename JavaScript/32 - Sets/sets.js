/*
SETS - Es un nuevo tipo de dato, simlar a un array perdo de datos únicos. Es un arreglo mejorado de JS que solo acepta valores únicos, en cuanto a valores primitivos se refiere. SI le pasamos objetos no funciona ya que cada objeto es una referencia única
*/


const set = new Set();
const set1 = new Set([1,2,3,3,3,3,5,45,5,5,4,false,true,false]);

console.log(set1);

const set2 = new Set();
set2.add(1);
set2.add(2);
set2.add(3);
set2.add(3);//NO me duplica valores
console.log(set2);
console.log(set2.size);
console.log("Recorriendo con ForOf");
for(item of set1){
    console.log(item);
}
console.log("Recorriendo con ForEach");
set2.forEach(element => {
    console.log(element);
});

/**
 * El set es un tipo de dato iterable, pero no es un arreglo, no se puede hacer referencia [] a una posición, para eso tenemos que convertir el set en un arreglo
 */
console.log("Array from set");
const arr = Array.from(set1)
console.log(arr);
console.log("Accedemos a una posicción dentro del arreglo");
console.log(arr[3]);