/**
 * CALL - APPLY - BIND
 * //Enlazar contextos diferentes
 */

/**
 * Call y Aply sirven para llamar funciones externas que pueden tomar el contexto del objeto que las llama, para esto es importante un excelente manejo del this
 */
console.log(this);
this.lugar = "contexto global"

function saludar(saludo, persona){
    console.log(`${saludo} ${persona} estamos ${this.lugar}`)
}

saludar();

const obj = {
    lugar:  "Contexto objeto"
}

saludar.call(obj, "Hola","memo")
saludar.apply(obj,["Hola","caro"])

//La diferencia entre call y apply es que call llama a los parámetros independientementem apply recibe un arreglo con los parámetros


//bind
const persona = {
    nombre : "memo",

    saludar: function(){
        console.log(`Hola ${this.nombre}`);
    }
}

persona.saludar();

const otraPersona = {
    saludar: persona.saludar.bind(persona) //Enlazamos el contexto de persona
}

otraPersona.saludar();//debe salir hola undefined