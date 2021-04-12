/**
 * PROTOTIPOS
 * Los prototipos en JS son la base de la programación orientada a objetos. JS es un lenguaje que es multiparadigma. La orientación a objeto en JS es muy diferente a la orientación a objetos que se utiliza en lenguajes especializados como Java o C++
 */

/**
 * Clases - Modelo a seguir, plantilla
 * Objetos - Instancia de una clase, copia de el modelo
 * Atributos - Propiedades del objeto
 * Métodos - Funciones del objeto - Acciones
 */

/**
 * JavaScript es un lenguaje orientado a objetos orientado a prototipos, no a clases.
 * LA herencia en JS se hace mediante la cadena de prototipos en el que se basa el objeto.
 */

const animal = {
    nombre: "Matilda",
    sonar() {
        console.log("Yo sueno");
    }
}
console.log(animal);
/**
 * Cuando declaro un objeto, el prototipo del objeto es de tipo object. Entonces la idea de la programación orientada a prototipos es crear una función constructora que genere instancias basadas en el prototipo función generadora
 */

/**
 * FUNCIÓN CONSTRUCTORA
 *Con el siguiente ejemplo de función constructora podemos construir on objeto de tipo Animal. Como parámetros tenemos nombre y género. Esto quiere decir que el nombre del objeto generado con la función constructora y el género del objeto generado con la función constructora se van a pasar por parámetro.
 Los métodos también se declaran con el this para poder hacer referencia de contexto a ese objeto
 */

function Animal(nombre,genero){
    this.nombre = nombre;
    this.genero = genero;

    //Los objetos literales no aplican para métodos constructoras.
    this.sonar = function (){
        console.log(`${this.nombre} esta sonando`);
    }
}


//Creación de la instancia
const isis = new Animal("isis","Femenino");
console.log(isis);
isis.sonar();

//De esta manera podemos agregar métodos al prototipo, eso quiere decir que todos los objetos de esta instancia que heredan de ese prototipo automáticamente heredan ese método y lo pueden usar. Esto nos ayuda a ser más eficientes en la programación y no declarar métodos dentro de la función constructora. ASí el método sonar no se duplica siempre que creamos una instancia.
Animal.prototype.comer = function(){
    console.log("Estoy comiendo");
}

isis.comer();

