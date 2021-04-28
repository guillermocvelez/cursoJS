/**
 * ASYNC AWAIT
 * Funciones asíncronas, van a esperar a que algo que se cumpla para poder seguir ejecutando el proceso que se esté trabajando en ese momento
 * Las promesas vienen a reemplazar las callbacks, pero las funciones asíncronas no vienen a reemplazar las promesas, trabajan en conjunto
 * Usamos la función del ejemplo de promesas.
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

//Así funciona un función asíncrona - le anteponemos la palabra reservada async

async function funsAsincDeclarada(){    
    //para el manejo de errores, nos combiene trabajar el boque try-catch (Carpeta 08)
    try{
        //lapalabra reservada await, le dice a JS que va a esperar el resultado de esa promesa, ántes de pasar a la siguiente linea de código
        //Si no le colocamos el await en consola se imprimirá undefined, debido al funcionamiento del evento loop de JS
        let obj = await cuadradoPromise(3);
        console.log(`Valor: ${obj.value} cuadrado: ${obj.result}`);

        obj = await cuadradoPromise(7);
        console.log(`Valor: ${obj.value} cuadrado: ${obj.result}`);

        obj = await cuadradoPromise(4);
        console.log(`Valor: ${obj.value} cuadrado: ${obj.result}`);

        obj = await cuadradoPromise(12);
        console.log(`Valor: ${obj.value} cuadrado: ${obj.result}`);

    }catch(error){
        console.log("error");
    }

}

funsAsincDeclarada();