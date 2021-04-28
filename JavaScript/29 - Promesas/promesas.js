/**
 * PROMESAS
 * Una promesa es una función que se ejecuta asíncronamente y se puede ejecutar o no
 * UNa promesa la tenemos que entender como if else, si la promesa se cumple se ejecuta el resolve, si la promesa falla se ejecuta el reject
 */

function cuadradoPromise(value){
    //Manejamos el error - si esto pasa se me ejecuta el catch
    if(typeof value != "number") return Promise.reject('Error, el valor ingresado no es un número')

    //retorna una instancia del objeto promise new Promise(resolve,reject)
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            //Parte positiva de la promesa
            resolve({
                value,
                result: value*value,
            });
            
        }, 0 | Math.random()*1000)
    })
}

//El método then es el siguiente bolque que se ejecuta una vez se ejecute la respuesta positiva - resolve
//el then ejecuta una función según lo que esté recibiendo
//Puedo tener varios then ecadenados según la cantidad de promesas que tenga
cuadradoPromise(10)
    .then((obj)=>{
        console.log(`valor: ${obj.value} resultado:${obj.result}`);
        return cuadradoPromise(2);
    })
    .then((obj)=>{
        console.log(`valor: ${obj.value} resultado:${obj.result}`);
        return cuadradoPromise(3)
    })
    .then(obj => {
        console.log(`valor: ${obj.value} resultado:${obj.result}`);
        console.log("Fin de la promesa");
    })
    .catch();